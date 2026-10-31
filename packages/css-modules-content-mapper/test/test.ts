import type { OpenProjectResult } from 'content-mapper-test-utils'

import assert from 'node:assert/strict'
import { dirname } from 'node:path'
import { after, test } from 'node:test'

import { createContentMapper, transformResultToMarkdown } from 'content-mapper-test-utils'
import { testFixturesDirectory } from 'snapshot-fixtures'

/**
 * Render option diagnostics as markdown, so invalid options can be tested with snapshots.
 *
 * @param openProjectResult
 *   The result of opening the project.
 * @returns
 *   The markdown, or an empty string if the options are valid.
 */
function optionDiagnosticsToMarkdown(openProjectResult: OpenProjectResult): string {
  if (!openProjectResult.optionDiagnostics?.length) {
    return ''
  }

  const items = openProjectResult.optionDiagnostics.map(({ messageText, path }) => {
    const location = path
      .map((segment) => (typeof segment === 'number' ? `[${segment}]` : `.${segment}`))
      .join('')
      .slice(1)
    return `- \`${location || 'options'}\`: \`${messageText}\``
  })

  return `\n## Option diagnostics\n\n${items.join('\n')}\n`
}

const contentMapper = await createContentMapper(new URL('../package.json', import.meta.url))

after(contentMapper.dispose)

test('initialize', () => {
  assert.deepEqual(contentMapper.initializeResult, {
    positionEncoding: 'utf-16',
    diagnosticSource: 'CSS'
  })
})

testFixturesDirectory({
  directory: new URL('../fixtures', import.meta.url),
  write: false,
  tests: {
    async 'transform.md'(file) {
      const original = String(file)
      await using project = await contentMapper.openProject(dirname(file.path))

      const transform = await project.transform(file.path, original)

      return (
        transformResultToMarkdown(original, transform) +
        optionDiagnosticsToMarkdown(project.openProjectResult)
      )
    }
  }
})
