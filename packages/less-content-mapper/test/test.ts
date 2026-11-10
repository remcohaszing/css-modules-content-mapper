import assert from 'node:assert/strict'
import { dirname } from 'node:path'
import { after, test } from 'node:test'
import { fileURLToPath } from 'node:url'

import { createContentMapper, transformResultToMarkdown } from 'content-mapper-test-utils'
import { testFixturesDirectory } from 'snapshot-fixtures'

import pkg from '../package.json' with { type: 'json' }

const fixture = new URL('../fixtures/nesting/', import.meta.url)
const fileName = fileURLToPath(new URL('test.less', fixture))

/**
 * Get Node.js arguments that make a package fail to resolve, as if it wasn’t installed.
 *
 * @param hidden
 *   The package name to hide.
 * @returns
 *   The Node.js arguments.
 */
function hidePackage(hidden: string): string[] {
  const hook = `
    import { registerHooks } from 'node:module'

    registerHooks({
      resolve(specifier, context, nextResolve) {
        if (specifier === ${JSON.stringify(hidden)}) {
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

const contentMapper = await createContentMapper(new URL('../package.json', import.meta.url))

after(() => {
  contentMapper.dispose()
})

test('initialize', () => {
  assert.deepEqual(contentMapper.initializeResult, {
    positionEncoding: 'utf-16',
    diagnosticSource: 'Less'
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

      return transformResultToMarkdown(original, transform)
    }
  }
})

test('reports a diagnostic if less is not installed', async () => {
  const [command, ...args] = pkg.typescript.contentMapper.exec
  assert.ok(command)
  using withoutLess = await createContentMapper(new URL('../package.json', import.meta.url), {
    exec: [command, ...hidePackage('less'), ...args]
  })
  await using project = await withoutLess.openProject(fixture)

  assert.deepEqual(project.openProjectResult, {
    optionDiagnostics: [{ path: [], messageText: "'less' must be installed.", code: 3002 }]
  })

  const transform = await project.transform(fileName, '.a {\n  color: red;\n}\n')
  assert.deepEqual(transform, {
    extension: '.cts',
    text: 'declare const styles: {}\n\nexport = styles\n',
    mappings: [],
    diagnostics: [{ messageText: "'less' must be installed.", start: 0, length: 0, code: 4002 }]
  })
})

// The message of this error contains absolute paths, so it can’t be a snapshot.
test('reports an import that can’t be found', async () => {
  const content = '.a {\n  color: red;\n}\n\n@import "missing";\n'
  await using project = await contentMapper.openProject(fixture)

  const { diagnostics } = await project.transform(fileName, content)
  assert.equal(diagnostics?.length, 1)
  const [diagnostic] = diagnostics
  assert.match(String(diagnostic?.messageText), /^'missing' wasn't found/)
  assert.equal(content.slice(diagnostic?.start, diagnostic.start + diagnostic.length), '@import')
})

// Less normalizes line endings before it parses a file, so its offsets don’t match the original
// content. These can’t be fixtures, because Prettier formats those using line feeds.
test('reports the location of errors in files with CRLF line endings', async () => {
  const content = '.a {\r\n  color: red;\r\n}\r\n\r\n.b {\r\n  color: @missing;\r\n}\r\n'
  await using project = await contentMapper.openProject(fixture)

  const { diagnostics } = await project.transform(fileName, content)
  assert.equal(diagnostics?.length, 1)
  const [diagnostic] = diagnostics
  assert.equal(diagnostic?.messageText, 'variable @missing is undefined')
  assert.equal(content.slice(diagnostic.start, diagnostic.start + diagnostic.length), '@missing')
})

test('maps classes in files with CRLF line endings', async () => {
  const content = '.a {\r\n  color: red;\r\n}\r\n\r\n.b {\r\n  color: blue;\r\n}\r\n'
  await using project = await contentMapper.openProject(fixture)

  const { mappings } = await project.transform(fileName, content)
  assert.deepEqual(
    mappings?.map(([, , start, length]) => content.slice(start, start + length)),
    ['a', 'b']
  )
})
