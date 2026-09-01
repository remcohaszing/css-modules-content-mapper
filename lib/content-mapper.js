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

import postcss from 'postcss'
import modules from 'postcss-modules'
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
 * Return the input.
 *
 * @template T
 *   The type of the input.
 * @param {T} input
 *   The value to return.
 * @returns {T}
 *   The input value.
 */
function identity(input) {
  return input
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
 * Transform CSS content into a CSS modules TypeScript export.
 *
 * @param {TransformParams} params
 *   The transform request parameters as given by TypeScript.
 * @returns {Promise<TransformResult>}
 *   The transform response expected by TypeScript.
 */
async function transform({ content, fileName, projectHandle }) {
  const ext = fileName.slice(fileName.lastIndexOf('.') + 1)
  const localsConvention = settings.get(projectHandle)

  /** @type {Map<string, { doc: '', localNames: Set<string>, originalOffset?: number }>} */
  const data = new Map()

  /** @type {SpanMapping[]} */
  const mappings = []

  const processor = postcss([
    modules({
      localsConvention,
      generateScopedName: identity,
      getJSON(cssFilename, json) {
        for (const [localName, className] of Object.entries(json)) {
          let d = data.get(className)
          if (!d) {
            d = {
              doc: '',
              localNames: new Set()
            }
            data.set(className, d)
          }
          d.localNames.add(JSON.stringify(localName))
        }
      }
    })
  ])

  const { root } = await processor.process(content, {
    parser: safe,
    from: fileName
  })

  let text = 'declare const styles: {'

  /** @type {string | undefined} */
  let comment

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
          .replaceAll('\n', '\n * ')}\n * \`\`\`\n`
        const selectorParser = parser((selectors) => {
          selectors.walk((selector) => {
            if (selector.type !== 'class' && selector.type !== 'id') {
              return
            }

            const d = data.get(selector.value)
            if (d) {
              if (comment) {
                d.doc += comment
              }
              d.doc += doc
              d.originalOffset ??= start.offset + selector.sourceIndex + 1
            }
          })
        })

        selectorParser.processSync(node)
        comment = undefined
      }
    }
  })

  for (const [className, { doc, localNames, originalOffset }] of data) {
    for (const localName of localNames) {
      text += '\n/**\n'
      text += doc
      text += ' */\nreadonly '
      if (originalOffset != null) {
        mappings.push([
          text.length,
          localName.length,
          originalOffset,
          className.length,
          /** @satisfies {SpanMapKind.Alias} */ (2),
          /** @satisfies {SpanMapFeature.Definition} */ (8)
        ])
      }
      text += localName
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
