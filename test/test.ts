import type { TransformResult } from '../lib/protocol.js'

import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'

import { testFixturesDirectory } from 'snapshot-fixtures'
import typescript from 'typescript'
import {
  createMessageConnection,
  StreamMessageReader,
  StreamMessageWriter
} from 'vscode-jsonrpc/node'

import pkg from '../package.json' with { type: 'json' }

testFixturesDirectory({
  directory: new URL('../fixtures', import.meta.url),
  write: true,
  tests: {
    async 'transform.md'(file) {
      const original = String(file)
      const dir = dirname(file.path)
      const tsconfigFileName = join(dir, 'tsconfig.json')
      const configSourceFile = typescript.readJsonConfigFile(
        tsconfigFileName,
        typescript.sys.readFile
      )
      const { raw } = typescript.parseJsonSourceFileConfigFileContent(
        configSourceFile,
        typescript.sys,
        dir,
        undefined,
        tsconfigFileName
      )

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const contentMapper = (raw.contentMappers as any[]).find((cm) => cm.package === pkg.name)

      const [command, ...args] = pkg.typescript.contentMapper.exec
      using proc = spawn(command, args)
      const connection = createMessageConnection(
        new StreamMessageReader(proc.stdout),
        new StreamMessageWriter(proc.stdin)
      )

      connection.listen()

      const projectHandle = `${pkg.name}@${pkg.version}:0`

      const initialize = await connection.sendRequest('initialize')
      assert.deepEqual(initialize, { positionEncoding: 'utf-16', diagnosticSource: 'CSS' })

      const openProject = await connection.sendRequest('openProject', {
        projectHandle,
        options: contentMapper.options
      })
      assert.deepEqual(openProject, {})

      const transform = await connection.sendRequest<TransformResult>('transform', {
        content: original,
        fileName: file.path,
        projectHandle
      })

      const closeProject = await connection.sendRequest('closeProject', { projectHandle })
      assert.deepEqual(closeProject, null)

      return [
        '## Text',
        '',
        '````ts',
        transform.text,
        '````',
        '',
        '## Mappings',
        '',
        ...(transform.mappings?.map(
          ([virtualStart, virtualLength, originalStart, originalLength]) =>
            `- \`${original.slice(
              originalStart,
              originalStart + originalLength
            )}\` → \`${transform.text.slice(virtualStart, virtualStart + virtualLength)}\``
        ) ?? []),
        ''
      ].join('\n')
    }
  }
})
