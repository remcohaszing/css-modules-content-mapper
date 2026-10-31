import assert from 'node:assert/strict'
import { test } from 'node:test'

import { createContentMapper } from 'content-mapper-test-utils'

const script = `
import { startMapper } from './lib/core.js'

startMapper({
  diagnosticSource: 'Test',
  preprocess() {
    throw new Error('Preprocessor exploded')
  }
})
`

test('reports an error thrown by the preprocessor as a diagnostic', async () => {
  using contentMapper = await createContentMapper(new URL('../package.json', import.meta.url), {
    exec: ['node', '--input-type=module', '--eval', script]
  })

  assert.deepEqual(contentMapper.initializeResult, {
    positionEncoding: 'utf-16',
    diagnosticSource: 'Test'
  })

  await using project = await contentMapper.openProject(
    new URL('../fixtures/class/', import.meta.url)
  )

  const result = await project.transform('/test.css', '.a {}')
  assert.deepEqual(result, {
    extension: '.cts',
    text: 'declare const styles: {}\n\nexport = styles\n',
    mappings: [],
    diagnostics: [
      {
        messageText: 'Cannot compile this file: Preprocessor exploded.',
        start: 0,
        length: 0,
        code: 2000
      }
    ]
  })
})
