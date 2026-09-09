/**
 * @import {
 *   CloseProjectParams,
 *   InitializeResult,
 *   OpenProjectParams,
 *   OpenProjectResult,
 *   SpanMapFeature,
 *   SpanMapKind,
 *   SpanMapping,
 *   TransformParams,
 *   TransformResult
 * } from './protocol.js'
 */

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
 * Map a project handle to a locals convention.
 *
 * @type {Map<string, LocalsConvention>}
 */
const settings = new Map()

/**
 * Close a project
 *
 * @param {CloseProjectParams} params
 *   The params sent by TypeScript.
 */
function closeProject({ projectHandle }) {
  settings.delete(projectHandle)
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
    diagnosticSource: 'CSS'
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
function openProject({ options, projectHandle }) {
  const localsConvention = /** @type {LocalsConvention} */ (options?.localsConvention)

  if (localsConvention == null || allowedLocalsConventions.includes(localsConvention)) {
    settings.set(projectHandle, localsConvention)
    return {}
  }

  return {
    optionDiagnostics: [
      {
        path: ['localsConvention'],
        messageText: `Content mapper option 'localsConvention' must be one of ${allowedLocalsConventions.map((value) => `'${value}'`).join(', ')}.`,
        code: 1001
      }
    ]
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
 * @param {string} projectHandle
 *   The content mapper project handle for which to use the locals convention.
 * @param {string} className
 *   The CSS class name for which to collect local names.
 * @param {Set<string>} localNames
 *   The local names to add to.
 * @see https://github.com/madyankin/postcss-modules/blob/v9.0.1/src/localsConvention.js#L25-L53
 */
function collectLocalNames(projectHandle, className, localNames) {
  const localsConvention = settings.get(projectHandle)

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
 * Transform CSS content into a CSS modules TypeScript export.
 *
 * @param {TransformParams} params
 *   The transform request parameters as given by TypeScript.
 * @returns {TransformResult}
 *   The transform response expected by TypeScript.
 */
function transform({ content, fileName, projectHandle }) {
  let text = 'declare const styles: {'

  /** @type {string | undefined} */
  let comment

  const ext = fileName.slice(fileName.lastIndexOf('.') + 1)

  /** @type {Map<string, { doc: '', localNames: Set<string>, originalOffset?: number }>} */
  const data = new Map()

  /** @type {SpanMapping[]} */
  const mappings = []

  const root = safe(content, { from: fileName })

  root.walk((node) => {
    switch (node.type) {
      case 'comment':
        if (node.text.startsWith('*')) {
          comment = ` ${node.text}\n`
        }
        break
      case 'rule': {
        const { end, start } = node.rangeBy()
        const doc = ` * \`\`\`${ext}\n * ${content
          .slice(start.offset + 1 - start.column, end.offset)
          .replaceAll(/\s*\/\*(.+?)\*\//g, '')
          .replaceAll('*/', '*\u200B/')
          .replaceAll('\n', '\n * ')}\n * \`\`\`\n`
        const selectorParser = parser((selectors) => {
          selectors.walk((selector) => {
            if (selector.type !== 'class' && selector.type !== 'id') {
              return
            }

            let d = data.get(selector.value)
            if (!d) {
              d = {
                doc: '',
                localNames: new Set()
              }
              data.set(selector.value, d)
            }

            if (comment) {
              d.doc += comment
            }
            d.doc += doc
            d.originalOffset ??= start.offset + selector.sourceIndex + 1
            collectLocalNames(projectHandle, selector.value, d.localNames)
          })
        })

        try {
          selectorParser.processSync(node, {})
        } catch {
          // Fail silently. The properties are not exposed.
        }
        comment = undefined
      }
    }
  })

  for (const [className, { doc, localNames, originalOffset }] of data) {
    for (const localName of localNames) {
      text += '\n/**\n'
      text += doc
      text += ' */\nreadonly '
      const quoted = JSON.stringify(localName)
      if (originalOffset != null) {
        mappings.push([
          text.length,
          quoted.length,
          originalOffset,
          className.length,
          /** @satisfies {SpanMapKind.Alias} */ (2),
          /** @satisfies {SpanMapFeature.Definition} */ (8)
        ])
      }
      text += quoted
      text += ': string\n'
    }
  }

  text += '}\n\nexport = styles\n'

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

connection.listen()
