import type { OpenProjectResult } from 'content-mapper-test-utils'

import assert from 'node:assert/strict'
import { dirname } from 'node:path'
import { after, test } from 'node:test'
import { fileURLToPath } from 'node:url'

import { createContentMapper, transformResultToMarkdown } from 'content-mapper-test-utils'
import { testFixturesDirectory } from 'snapshot-fixtures'

import pkg from '../package.json' with { type: 'json' }

type ContentMapper = Awaited<ReturnType<typeof createContentMapper>>

/**
 * Get Node.js arguments that make packages fail to resolve, as if they weren’t installed.
 *
 * @param packages
 *   The package names to hide.
 * @returns
 *   The Node.js arguments.
 */
function hidePackages(packages: string[]): string[] {
  if (!packages.length) {
    return []
  }

  const hook = `
    import { registerHooks } from 'node:module'

    const hidden = new Set(${JSON.stringify(packages)})

    registerHooks({
      resolve(specifier, context, nextResolve) {
        if (hidden.has(specifier)) {
          throw Object.assign(new Error(\`Cannot find package '\${specifier}'\`), {
            code: 'ERR_MODULE_NOT_FOUND'
          })
        }
        return nextResolve(specifier, context)
      }
    })
  `

  return ['--import', `data:text/javascript,${encodeURIComponent(hook)}`]
}

/**
 * Start the Sass content mapper.
 *
 * @param hidden
 *   Packages to hide from the mapper, to test which Sass implementation it uses.
 * @returns
 *   The content mapper.
 */
function createSassContentMapper(hidden: string[]): Promise<ContentMapper> {
  const [command, ...args] = pkg.typescript.contentMapper.exec
  assert.ok(command)
  return createContentMapper(new URL('../package.json', import.meta.url), {
    exec: [command, ...hidePackages(hidden), ...args]
  })
}

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

// Both implementations must produce the same output.
const sassEmbedded = await createSassContentMapper([])
const sass = await createSassContentMapper(['sass-embedded'])

after(() => {
  sassEmbedded.dispose()
  sass.dispose()
})

test('initialize', () => {
  for (const contentMapper of [sassEmbedded, sass]) {
    assert.deepEqual(contentMapper.initializeResult, {
      positionEncoding: 'utf-16',
      diagnosticSource: 'Sass'
    })
  }
})

/**
 * Create a fixture test that transforms the input with a content mapper.
 *
 * @param contentMapper
 *   The content mapper to use.
 * @returns
 *   The fixture test.
 */
function createTransformTest(contentMapper: ContentMapper) {
  return async (file: { path: string }): Promise<string> => {
    const original = String(file)
    await using project = await contentMapper.openProject(dirname(file.path))

    const transform = await project.transform(file.path, original)

    return (
      transformResultToMarkdown(original, transform) +
      optionDiagnosticsToMarkdown(project.openProjectResult)
    )
  }
}

testFixturesDirectory({
  directory: new URL('../fixtures', import.meta.url),
  write: false,
  tests: {
    'sass-embedded': { expected: 'transform.md', generate: createTransformTest(sassEmbedded) },
    sass: { expected: 'transform.md', generate: createTransformTest(sass) }
  }
})

test('reports a diagnostic if neither sass-embedded nor sass is installed', async () => {
  const messageText = "Either 'sass-embedded' or 'sass' must be installed."
  const fixture = new URL('../fixtures/nesting/', import.meta.url)

  using contentMapper = await createSassContentMapper(['sass-embedded', 'sass'])
  await using project = await contentMapper.openProject(fixture)

  assert.deepEqual(project.openProjectResult, {
    optionDiagnostics: [{ path: [], messageText, code: 1003 }]
  })

  const transform = await project.transform(
    fileURLToPath(new URL('input.scss', fixture)),
    '.a {\n  color: red;\n}\n'
  )
  assert.deepEqual(transform, {
    extension: '.cts',
    text: 'declare const styles: {}\n\nexport = styles\n',
    mappings: [],
    diagnostics: [{ messageText, start: 0, length: 0, code: 2002 }]
  })
})
