import assert from 'node:assert/strict'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import { createContentMapper } from 'content-mapper-test-utils'

const fixture = new URL('../fixtures/nesting/', import.meta.url)
const fileName = fileURLToPath(new URL('fallback.scss', fixture))

const valid = '.valid {\n  color: red;\n}\n'
const broken = '.valid {\n  color: red;\n}\n\n.broken {\n  color: $undefined-variable;\n}\n'

test('keeps the last successful result when compilation fails', async () => {
  using contentMapper = await createContentMapper(new URL('../package.json', import.meta.url))

  {
    await using first = await contentMapper.openProject(fixture)

    const good = await first.transform(fileName, valid)
    assert.match(good.text, /readonly valid: string/)
    assert.ok(good.mappings?.length)
    assert.equal(good.diagnostics, undefined)

    const bad = await first.transform(fileName, broken)
    assert.equal(bad.text, good.text)
    assert.deepEqual(bad.mappings, [])
    assert.equal(bad.diagnostics?.length, 1)
    const [diagnostic] = bad.diagnostics
    assert.equal(diagnostic?.messageText, 'Undefined variable.')
    assert.equal(
      broken.slice(diagnostic.start, diagnostic.start + diagnostic.length),
      '$undefined-variable'
    )

    const recovered = await first.transform(fileName, valid)
    assert.deepEqual(recovered, good)
  }

  // A new project doesn’t share the results of a previous one.
  await using second = await contentMapper.openProject(fixture)
  const afterReopen = await second.transform(fileName, broken)
  assert.equal(afterReopen.text, 'declare const styles: {}\n\nexport = styles\n')
})
