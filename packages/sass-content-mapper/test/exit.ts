import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { dirname } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import {
  createMessageConnection,
  StreamMessageReader,
  StreamMessageWriter
} from 'vscode-jsonrpc/node'

import pkg from '../package.json' with { type: 'json' }

const fileName = fileURLToPath(new URL('../fixtures/exit.scss', import.meta.url))
const projectHandle = `${pkg.name}@${pkg.version}:0`

// If TypeScript stops without shutting the mapper down, for example because it crashed, the mapper
// only sees its stdin close. The `sass-embedded` compiler runs in a separate process, which keeps
// the mapper alive unless it’s disposed.
test('exits when stdin is closed', async () => {
  const [command, ...args] = pkg.typescript.contentMapper.exec
  assert.ok(command)
  using proc = spawn(command, args, {
    stdio: ['pipe', 'pipe', 'inherit'],
    cwd: dirname(import.meta.dirname)
  })
  const connection = createMessageConnection(
    new StreamMessageReader(proc.stdout),
    new StreamMessageWriter(proc.stdin)
  )

  // Reject pending requests if the mapper exits, instead of waiting forever.
  proc.once('exit', () => connection.dispose())

  connection.listen()

  await connection.sendRequest('initialize')
  await connection.sendRequest('openProject', { configFileName: '', projectHandle })
  await connection.sendRequest('transform', {
    content: '.a {\n  color: red;\n}\n',
    fileName,
    projectHandle
  })

  const exited = once(proc, 'exit')
  proc.stdin.end()

  const [code] = await Promise.race([
    exited,
    new Promise<never>((resolve, reject) => {
      setTimeout(
        () => reject(new Error('The mapper didn’t exit after stdin was closed')),
        5000
      ).unref()
    })
  ])
  assert.equal(code, 0)
})
