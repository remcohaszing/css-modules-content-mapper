/**
 * @import { Rule } from 'postcss'
 * @import { ClassName, Identifier } from 'postcss-selector-parser'
 * @import {
 *   CloseProjectParams,
 *   InitializeResult,
 *   MapperDiagnostic,
 *   OpenProjectParams,
 *   OpenProjectResult,
 *   OptionDiagnostic,
 *   SpanMapFeature,
 *   SpanMapKind,
 *   SpanMapping,
 *   TransformParams,
 *   TransformResult
 * } from './protocol.js'
 */

import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'

import { name as isIdentifierName } from 'estree-util-is-identifier-name'
import camelCase from 'lodash.camelcase'
import safe from 'postcss-safe-parser'
import parser from 'postcss-selector-parser'
import {
  createMessageConnection,
  StreamMessageReader,
  StreamMessageWriter
} from 'vscode-jsonrpc/node'

const allowedLocalsConventions = /** @type {const} */ ([
  'camelCase',
  'camelCaseOnly',
  'dashes',
  'dashesOnly',
  'all',
  'none'
])

/**
 * @typedef {typeof allowedLocalsConventions[number]} LocalsConvention
 */

/**
 * @typedef CssContentMapperOptions
 *   Shared options for all CSS modules content mappers.
 * @property {LocalsConvention} [localsConvention]
 *   How to expose class names.
 */

/**
 * @template {{}} Options
 *   Content mapper options after validation.
 * @typedef PreprocessParams
 * @property {string} configFileName
 *   The absolute tsconfig path, or an empty string for a project without a config file.
 * @property {string} content
 *   The original content of the file to transform.
 * @property {string} fileName
 *   The absolute path of the file to transform.
 * @property {Options} options
 *   The adapter options returned by `validateOptions`.
 */

/**
 * @typedef Syntax
 *   The lexical rules of the original language. These are used to find classes and rules in the
 *   original content, starting from the positions the source map provides.
 * @property {(content: string, offset: number) => number} findSelectorEnd
 *   Find the offset where the selector starting at the given offset ends.
 * @property {(content: string, offset: number) => number} findRuleEnd
 *   Find the offset where the rule starting at the given offset ends.
 * @property {(content: string, offset: number) => boolean} isSelector
 *   Check whether the given offset is part of a selector, as opposed to a comment or a statement.
 * @property {(content: string, offset: number) => number} findTokenEnd
 *   Find the offset where the selector token starting at the given offset ends. This is used for
 *   tokens that generate a class, such as `&-suffix` or `#{interpolation}`.
 */

/**
 * @typedef CompiledResult
 * @property {string} css
 *   The compiled CSS.
 * @property {object} map
 *   A version 3 source map from the compiled CSS to the original content.
 * @property {Syntax} syntax
 *   The lexical rules of the original content.
 */

/**
 * @typedef FailedResult
 * @property {MapperDiagnostic[]} diagnostics
 *   Diagnostics explaining why the content could not be compiled.
 */

/**
 * @typedef {CompiledResult | FailedResult} PreprocessResult
 */

/**
 * @template {{}} Options
 *   Content mapper options after validation.
 * @typedef ValidateResult
 * @property {OptionDiagnostic[]} diagnostics
 *   Diagnostics for invalid option values.
 * @property {Options} options
 *   The options to use, with invalid values removed.
 */

/**
 * @template {{}} Options
 *   Content mapper options after validation.
 * @typedef Adapter
 *   An adapter for a CSS modules preprocessor.
 * @property {string} diagnosticSource
 *   The source identifier displayed for content mapper produced diagnostics.
 * @property {(params: PreprocessParams<Options>) => PreprocessResult} [preprocess]
 *   Compile the original content to CSS. If omitted, the content is treated as CSS.
 * @property {(options: Record<string, unknown>) => ValidateResult<Options>} [validateOptions]
 *   Validate adapter-specific options from the `contentMappers` entry. TypeScript still opens the
 *   project if options are invalid, so the returned options are used instead of the original ones.
 * @property {() => void} [dispose]
 *   Release resources that would keep the process alive, such as a compiler process. This is
 *   called when the connection closes, so the mapper still exits cleanly if TypeScript stops
 *   without shutting it down, for example if it crashes.
 */

/**
 * @template {{}} Options
 *   Content mapper options after validation.
 * @typedef Project
 * @property {string} configFileName
 *   The absolute tsconfig path, or an empty string for a project without a config file.
 * @property {LocalsConvention | undefined} localsConvention
 *   The locals convention to apply.
 * @property {Options} options
 *   The options from the `contentMappers` entry.
 * @property {Map<string, string>} lastResults
 *   The last successfully transformed text per file name, used when compilation fails.
 */

/**
 * @typedef Location
 * @property {number} offset
 *   The offset in the original content.
 * @property {number} length
 *   The length of the span in the original content.
 */

/**
 * @typedef Snippet
 * @property {number} start
 *   The start offset of the snippet in the original content.
 * @property {number} end
 *   The end offset of the snippet in the original content.
 * @property {string} text
 *   The snippet text.
 */

/**
 * @typedef Source
 * @property {string} content
 *   The text that the CSS AST is parsed from.
 * @property {object} [map]
 *   A source map from the content to the original content, if the content was compiled.
 * @property {(node: Rule, selector: ClassName | Identifier) => Location | undefined} locate
 *   Find the location of a class or id selector in the original content.
 * @property {(node: Rule) => Snippet | undefined} preview
 *   Get the original source text of a rule.
 */

/**
 * Format a source snippet as a code block in a JSDoc comment.
 *
 * @param {string} ext
 *   The code block language.
 * @param {string} snippet
 *   The source snippet.
 * @returns {string}
 *   The snippet formatted for a JSDoc comment.
 */
function formatPreview(ext, snippet) {
  return ` * \`\`\`${ext}\n * ${snippet
    .replaceAll(/\s*\/\*(.+?)\*\//g, '')
    .replaceAll('*/', '*\u200B/')
    .replaceAll('\n', '\n * ')}\n * \`\`\`\n`
}

/**
 * Create a source for plain CSS, where the AST positions are the original positions.
 *
 * @param {string} content
 *   The CSS content.
 * @returns {Source}
 *   The source.
 */
function createCssSource(content) {
  return {
    content,
    locate(node, selector) {
      return {
        offset: node.rangeBy().start.offset + selector.sourceIndex + 1,
        length: selector.value.length
      }
    },
    preview(node) {
      const { end, start } = node.rangeBy()
      const snippetStart = start.offset + 1 - start.column
      return {
        start: snippetStart,
        end: end.offset,
        text: content.slice(snippetStart, end.offset)
      }
    }
  }
}

/**
 * Check whether a character can be part of a CSS identifier.
 *
 * @param {string | undefined} char
 *   The character to check.
 * @returns {boolean}
 *   Whether the character can be part of a CSS identifier.
 */
function isIdentifierChar(char) {
  return char != null && (/[\w-]/.test(char) || char.charCodeAt(0) >= 0x80)
}

/**
 * Find a selector token, such as `.foo`, in a range of text.
 *
 * @param {string} content
 *   The text to search.
 * @param {string} token
 *   The token to find.
 * @param {number} from
 *   The offset to start searching from.
 * @param {number} to
 *   The offset to stop searching at.
 * @returns {number}
 *   The offset of the token, or -1 if it wasn’t found.
 */
function findToken(content, token, from, to) {
  // Search only the range, so a missing token doesn’t scan the rest of the content.
  const range = content.slice(from, to)
  let index = range.indexOf(token)
  while (index !== -1) {
    if (!isIdentifierChar(content[from + index + token.length])) {
      return from + index
    }
    index = range.indexOf(token, index + 1)
  }
  return -1
}

/**
 * Create a source for compiled CSS, where the AST positions are mapped back to the original
 * content using a source map.
 *
 * Preprocessors such as Sass emit one mapping per compiled rule, pointing at the start of the
 * innermost original selector. A class is located by searching for it in that selector first. If
 * it isn’t there, it may come from a parent selector, so the whole file is searched. If that fails
 * too, the class was generated, for example using `&-suffix` or `#{interpolation}`, and the token
 * at the mapped position is used.
 *
 * @param {string} content
 *   The original content.
 * @param {string} fileName
 *   The file name of the original content.
 * @param {CompiledResult} compiled
 *   The compiled CSS and how to map it back to the original content.
 * @returns {Source}
 *   The source.
 */
function createMappedSource(content, fileName, compiled) {
  const { css, map, syntax } = compiled
  const url = pathToFileURL(fileName).href

  /** @type {number[]} */
  const lineStarts = [0]
  for (let index = content.indexOf('\n'); index !== -1; index = content.indexOf('\n', index + 1)) {
    lineStarts.push(index + 1)
  }

  /**
   * The original offset of each compiled rule. A rule is looked up once for its preview and once
   * for each class in it, so the result is cached.
   *
   * @type {Map<Rule, number | undefined>}
   */
  const origins = new Map()

  /**
   * Get the original offset of a compiled rule.
   *
   * @param {Rule} node
   *   The compiled rule.
   * @returns {number | undefined}
   *   The offset in the original content, or undefined if the rule comes from another file.
   */
  function getOrigin(node) {
    if (origins.has(node)) {
      return origins.get(node)
    }

    const start = node.source?.start
    const position = start && node.source?.input.origin(start.line, start.column)
    // PostCSS positions are 1-based.
    const origin =
      position && position.url === url
        ? (lineStarts[position.line - 1] ?? 0) + position.column - 1
        : undefined
    origins.set(node, origin)
    return origin
  }

  /**
   * The offsets of every class and ID token in the original content, built on first use. Searching
   * the whole content for each class instead is quadratic for large files.
   *
   * @type {Map<string, number[]> | undefined}
   */
  let tokenOffsets

  /**
   * Find the first occurrence of a class or ID token in the original content that is part of a
   * selector.
   *
   * @param {string} token
   *   The token to find, such as `.foo`.
   * @returns {number}
   *   The offset of the token, or -1 if it wasn’t found.
   */
  function findSelectorToken(token) {
    if (!tokenOffsets) {
      tokenOffsets = new Map()
      for (const match of content.matchAll(/[#.][\w\u0080-￿-]+/g)) {
        const offsets = tokenOffsets.get(match[0])
        if (offsets) {
          offsets.push(match.index)
        } else {
          tokenOffsets.set(match[0], [match.index])
        }
      }
    }

    return tokenOffsets.get(token)?.find((index) => syntax.isSelector(content, index)) ?? -1
  }

  return {
    content: css,
    map,
    locate(node, selector) {
      const origin = getOrigin(node)
      const token = (selector.type === 'id' ? '#' : '.') + selector.value

      if (origin != null) {
        const inSelector = findToken(
          content,
          token,
          origin,
          syntax.findSelectorEnd(content, origin)
        )
        if (inSelector !== -1) {
          return { offset: inSelector + 1, length: selector.value.length }
        }
      }

      const anywhere = findSelectorToken(token)
      if (anywhere !== -1) {
        return { offset: anywhere + 1, length: selector.value.length }
      }

      if (origin == null) {
        return
      }

      let start = origin
      if ((content[start] === '.' || content[start] === '#') && content[start + 1] !== '{') {
        start += 1
      }
      const end = syntax.findTokenEnd(content, start)
      if (end > start) {
        return { offset: start, length: end - start }
      }
    },
    preview(node) {
      const origin = getOrigin(node)
      if (origin == null) {
        return
      }

      const start = content.lastIndexOf('\n', origin - 1) + 1
      const end = syntax.findRuleEnd(content, origin)
      return { start, end, text: content.slice(start, end) }
    }
  }
}

/**
 * Convert a string from dashes to camel case.
 *
 * @param {string} string
 *   The input string.
 * @returns {string}
 *   The camel case string
 * @see https://github.com/madyankin/postcss-modules/blob/v9.0.1/src/localsConvention.js#L3-L5
 */
function dashesCamelCase(string) {
  return string.replaceAll(/-+(\w)/g, (_, firstLetter) => firstLetter.toUpperCase())
}

/**
 * Collect local names for a given class name.
 *
 * @param {LocalsConvention | undefined} localsConvention
 *   The locals convention to apply.
 * @param {string} className
 *   The CSS class name for which to collect local names.
 * @param {Set<string>} localNames
 *   The local names to add to.
 * @see https://github.com/madyankin/postcss-modules/blob/v9.0.1/src/localsConvention.js#L25-L53
 */
function collectLocalNames(localsConvention, className, localNames) {
  switch (localsConvention) {
    case 'all':
      localNames.add(className)
      localNames.add(camelCase(className))
      localNames.add(dashesCamelCase(className))
      break

    case 'camelCase':
      localNames.add(className)
      localNames.add(camelCase(className))
      break

    case 'camelCaseOnly':
      localNames.add(camelCase(className))
      break

    case 'dashes':
      localNames.add(className)
      localNames.add(dashesCamelCase(className))
      break

    case 'dashesOnly':
      localNames.add(dashesCamelCase(className))
      break

    default:
      localNames.add(className)
      break
  }
}

/**
 * Start a content mapper for CSS modules, optionally compiled from another language.
 *
 * @template {{}} Options
 *   Content mapper options after validation.
 * @param {Adapter<Options>} adapter
 *   The adapter that defines how the content is processed.
 * @returns {undefined}
 *   Nothing.
 */
export function startMapper(adapter) {
  /**
   * Map a project handle to its settings.
   *
   * @type {Map<string, Project<Options>>}
   */
  const projects = new Map()

  /**
   * Close a project
   *
   * @param {CloseProjectParams} params
   *   The params sent by TypeScript.
   */
  function closeProject({ projectHandle }) {
    projects.delete(projectHandle)
  }

  /**
   * Initialize the TypeScript content mapper.
   *
   * @returns {InitializeResult}
   *   The result for the `initialize` request.
   */
  function initialize() {
    return {
      positionEncoding: 'utf-16',
      diagnosticSource: adapter.diagnosticSource
    }
  }

  /**
   * Open a project
   *
   * @param {OpenProjectParams} params
   *   The params sent by TypeScript.
   * @returns {OpenProjectResult}
   *   The result that TypeScript expects.
   */
  function openProject({ configFileName, options = {}, projectHandle }) {
    const { localsConvention } = /** @type {CssContentMapperOptions} */ (options)

    /** @type {OptionDiagnostic[]} */
    const optionDiagnostics = []

    const isValidLocalsConvention =
      localsConvention == null || allowedLocalsConventions.includes(localsConvention)
    if (!isValidLocalsConvention) {
      optionDiagnostics.push({
        path: ['localsConvention'],
        messageText: `Argument for 'localsConvention' option must be: ${allowedLocalsConventions.map((value) => `'${value}'`).join(', ')}.`,
        code: 1001
      })
    }

    const validated = adapter.validateOptions?.(options)
    if (validated) {
      optionDiagnostics.push(...validated.diagnostics)
    }

    // TypeScript still opens the project if options are invalid. Storing nothing would discard all
    // settings, and storing the original options would pass invalid values to the preprocessor, so
    // the project is stored with only the valid values.
    projects.set(projectHandle, {
      configFileName: configFileName ?? '',
      localsConvention: isValidLocalsConvention ? localsConvention : undefined,
      // Without `validateOptions`, the adapter takes no options.
      options: validated ? validated.options : /** @type {Options} */ ({}),
      lastResults: new Map()
    })

    return optionDiagnostics.length ? { optionDiagnostics } : {}
  }

  /**
   * Generate a CSS modules TypeScript export from a CSS source.
   *
   * @param {Source} source
   *   The source to generate the export from.
   * @param {string} ext
   *   The file extension, used as the language of previews.
   * @param {string} fileName
   *   The file name of the CSS.
   * @param {Project<Options>} project
   *   The project the CSS belongs to.
   * @returns {{ text: string, mappings: SpanMapping[] }}
   *   The generated text and its mappings to the original content.
   */
  function generate(source, ext, fileName, project) {
    let text = 'declare const styles: {'
    let comment = ''

    /** @type {Map<string, { doc: string, localNames: Set<string>, original: Location | undefined, snippets: Snippet[] }>} */
    const data = new Map()

    /** @type {SpanMapping[]} */
    const mappings = []

    const root = safe(
      source.content,
      source.map ? { from: fileName, map: { prev: source.map } } : { from: fileName }
    )

    root.walk((node) => {
      switch (node.type) {
        case 'comment':
          if (node.text.startsWith('*')) {
            comment = ` ${node.text}\n`
          }
          break
        case 'rule': {
          const snippet = source.preview(node)
          const preview = snippet == null ? '' : formatPreview(ext, snippet.text)

          const selectorParser = parser((selectors) => {
            let isGlobal = false

            selectors.walk((selector) => {
              if (selector.type === 'pseudo') {
                if (selector.value === ':global') {
                  if (selector.nodes.length === 0) {
                    isGlobal = true
                  } else {
                    selector.removeAll()
                  }
                }

                if (selector.value === ':local' && selector.nodes.length === 0) {
                  isGlobal = false
                }

                return
              }

              if (isGlobal) {
                return
              }

              if (selector.type !== 'class' && selector.type !== 'id') {
                return
              }

              let d = data.get(selector.value)
              if (!d) {
                d = {
                  doc: '',
                  localNames: new Set(),
                  original: undefined,
                  snippets: []
                }
                data.set(selector.value, d)
              }

              // Compiled nested rules repeat their parent selectors. If this rule is part of a rule
              // that already documents this class, its comment and preview would be duplicates.
              if (
                !snippet ||
                !d.snippets.some(({ end, start }) => start <= snippet.start && snippet.end <= end)
              ) {
                d.doc += comment
                d.doc += preview
                if (snippet) {
                  d.snippets.push(snippet)
                }
              }
              d.original ??= source.locate(node, selector)
              collectLocalNames(project.localsConvention, selector.value, d.localNames)
            })
          })

          try {
            selectorParser.processSync(node, {})
          } catch {
            // Fail silently. The properties are not exposed.
          }
          comment = ''
        }
      }
    })

    for (const [, { doc, localNames, original }] of data) {
      for (const localName of localNames) {
        text += '\n/**\n'
        text += doc
        text += ' */\nreadonly '
        const quoted = isIdentifierName(localName) ? localName : JSON.stringify(localName)
        if (original != null) {
          mappings.push([
            text.length,
            quoted.length,
            original.offset,
            original.length,
            /** @satisfies {SpanMapKind.Alias} */ (2),
            /** @satisfies {SpanMapFeature.Definition} */ (8)
          ])
        }
        text += quoted
        text += ': string\n'
      }
    }

    text += '}\n\nexport = styles\n'

    return { text, mappings }
  }

  /**
   * Transform content into a CSS modules TypeScript export.
   *
   * @param {TransformParams} params
   *   The transform request parameters as given by TypeScript.
   * @returns {TransformResult}
   *   The transform response expected by TypeScript.
   */
  function transform({ content, fileName, projectHandle }) {
    const project = projects.get(projectHandle)
    assert.ok(project)

    const ext = fileName.slice(fileName.lastIndexOf('.') + 1)

    if (!adapter.preprocess) {
      return {
        extension: '.cts',
        ...generate(createCssSource(content), ext, fileName, project)
      }
    }

    /** @type {PreprocessResult} */
    let result
    try {
      result = adapter.preprocess({
        configFileName: project.configFileName,
        content,
        fileName,
        options: project.options
      })
    } catch (error) {
      // An adapter should report compile errors as diagnostics, but anything it throws is treated
      // the same way, so a bug in a preprocessor doesn’t fail the TypeScript request.
      const reason = error instanceof Error ? error.message : String(error)
      result = {
        diagnostics: [
          {
            messageText: `Cannot compile this file: ${reason.replace(/\.$/, '')}.`,
            start: 0,
            length: 0,
            code: 2000
          }
        ]
      }
    }

    if ('diagnostics' in result) {
      // Keep the last known exports while the file can’t be compiled, for example while typing.
      // The mappings are dropped, because they point at offsets in outdated content.
      return {
        extension: '.cts',
        text:
          project.lastResults.get(fileName) ??
          generate(createCssSource(''), ext, fileName, project).text,
        mappings: [],
        diagnostics: result.diagnostics
      }
    }

    const { mappings, text } = generate(
      createMappedSource(content, fileName, result),
      ext,
      fileName,
      project
    )
    project.lastResults.set(fileName, text)
    return { extension: '.cts', text, mappings }
  }

  const connection = createMessageConnection(
    new StreamMessageReader(process.stdin),
    new StreamMessageWriter(process.stdout)
  )

  connection.onRequest('closeProject', closeProject)
  connection.onRequest('initialize', initialize)
  connection.onRequest('openProject', openProject)
  connection.onRequest('transform', transform)

  connection.onClose(() => {
    adapter.dispose?.()
  })

  connection.listen()
}
