/**
 * @import { OptionDiagnostic } from 'content-mapper-test-utils'
 * @import * as Less from 'less'
 */

import { dirname, relative } from 'node:path'

import { startMapper } from 'css-modules-content-mapper'

import { syntax } from './syntax.js'

/**
 * @typedef LoadedLess
 * @property {LessStatic} less
 *   The Less API.
 * @property {LessStatic['render']} compiler
 *   The compiler to use.
 */

/**
 * Load the installed Less package.
 *
 * @returns {Promise<LoadedLess | undefined>}
 *   The Less API and the compiler to use, or undefined if `less` isn’t installed.
 */
async function loadLess() {
  try {
    const { default: lessPackage } = await import('less')

    return {
      less: lessPackage,
      compiler: lessPackage.render
    }
  } catch {
    // `less` isn’t installed.
  }
}

const { compiler, less } = (await loadLess()) ?? {}

const missingLessMessage = "'less' must be installed."

/**
 * The source map of a file that compiles to no CSS, because Less doesn’t return one for those.
 */
const emptySourceMap = { version: 3, sources: [], names: [], mappings: '' }

/**
 * Get the span of a Less error in the original content.
 *
 * @param {string} content
 *   The original file content.
 * @param {number} line
 *   The 1-based line of the error.
 * @param {number} column
 *   The 0-based column of the error.
 * @returns {{ start: number, length: number }}
 *   The span of the token at the error location.
 */
function getErrorSpan(content, line, column) {
  let lineStart = 0
  for (let index = 1; index < line; index += 1) {
    lineStart = content.indexOf('\n', lineStart) + 1
  }

  const start = lineStart + column
  const length = /^[^\s();{}]+/.exec(content.slice(start))?.[0].length ?? 0
  return { start, length }
}

/**
 * Check whether an error is a Less compile error with a location.
 *
 * @param {unknown} error
 *   The error to check.
 * @returns {error is Less.RenderError}
 *   Whether the error is a Less compile error.
 */
function isLessError(error) {
  return (
    error instanceof Error &&
    'type' in error &&
    typeof error.type === 'string' &&
    'line' in error &&
    typeof error.line === 'number' &&
    'column' in error &&
    typeof error.column === 'number'
  )
}

/**
 * @typedef LessElement
 *   A part of a selector in the Less AST. `@types/less` doesn’t describe the AST.
 * @property {() => number} getIndex
 *   Get the offset of the element in its original file.
 * @property {() => { filename?: string }} fileInfo
 *   Get the original file of the element.
 */

/**
 * @typedef {LessElement & { elements: LessElement[] }} LessSelector
 *   A selector in the Less AST.
 */

/**
 * @typedef LessNode
 *   A node in the Less AST.
 * @property {LessNode[]} [rules]
 *   The child nodes.
 * @property {LessSelector[]} [selectors]
 *   The own selectors of a rule, as written in the source.
 * @property {LessSelector[][]} [paths]
 *   The selectors of a rule, including those of its parents.
 */

/**
 * @typedef LessVisitorManager
 *   The part of the Less plugin manager that `@types/less` doesn’t describe.
 * @property {(visitor: { run: (root: LessNode) => LessNode }) => void} addVisitor
 *   Add a visitor of the Less AST.
 */

/**
 * Copy a Less AST node, so that it’s mapped to the position of another node.
 *
 * Less can share nodes between rules, so they’re copied instead of changed.
 *
 * @template {LessElement} Node
 *   The type of the node to copy.
 * @param {Node} node
 *   The node to copy.
 * @param {LessElement} target
 *   The node whose position to use.
 * @returns {Node}
 *   The copied node.
 */
function moveNode(node, target) {
  return Object.assign(Object.create(node), {
    getIndex: () => target.getIndex(),
    fileInfo: () => target.fileInfo()
  })
}

/**
 * Check whether a selector is one of a rule’s own selectors, rather than one of its parents.
 *
 * When a rule uses `&`, such as `&-suffix` or `& .child`, Less derives the first selector of each
 * path from the rule’s own selector, so it’s already mapped to the rule.
 *
 * @param {LessNode} rule
 *   The rule to check.
 * @param {LessSelector} selector
 *   The selector to check.
 * @returns {boolean}
 *   Whether the selector is one of the rule’s own selectors.
 */
function isOwnSelector(rule, selector) {
  const index = selector.getIndex()
  const { filename } = selector.fileInfo()
  return (rule.selectors ?? []).some(
    (own) => own.getIndex() === index && own.fileInfo().filename === filename
  )
}

/**
 * Map compiled nested rules to their innermost selector, as core expects. Less maps them to their
 * outermost selector instead.
 *
 * @param {LessNode} node
 *   The Less AST node to process.
 * @returns {undefined}
 *   Nothing.
 */
function mapRulesToInnermostSelector(node) {
  for (const child of node.rules ?? []) {
    child.paths &&= child.paths.map((path) => {
      const [first, ...rest] = path
      const last = rest.at(-1)
      if (!last || isOwnSelector(child, first)) {
        return path
      }

      const [innermost] = last.elements
      const [firstElement, ...elements] = first.elements
      const selector = moveNode(first, innermost)
      selector.elements = [moveNode(firstElement, innermost), ...elements]
      return [selector, ...rest]
    })

    mapRulesToInnermostSelector(child)
  }
}

/** @type {Less.Plugin} */
const innermostSelectorPlugin = {
  install(_, pluginManager) {
    // `@types/less` doesn’t describe visitors. This one runs after Less has joined the selectors.
    const manager = /** @type {Less.PluginManager & LessVisitorManager} */ (pluginManager)
    manager.addVisitor({
      run(root) {
        mapRulesToInnermostSelector(root)
        return root
      }
    })
  }
}

startMapper({
  diagnosticSource: 'Less',

  validateOptions() {
    /** @type {OptionDiagnostic[]} */
    const diagnostics = []

    if (!less) {
      diagnostics.push({ path: [], messageText: missingLessMessage, code: 3002 })
    }

    return { diagnostics, options: {} }
  },

  async preprocess({ content, fileName }) {
    if (!less || !compiler) {
      return { diagnostics: [{ messageText: missingLessMessage, start: 0, length: 0, code: 4002 }] }
    }

    try {
      // Imports are resolved the way Less itself does: relative to the importing file, then through
      // Node’s module resolution for packages.
      const result = await compiler(content, {
        filename: fileName,
        plugins: [innermostSelectorPlugin],
        sourceMap: {}
      })

      const { css, map } = result
      if (!map) {
        // This can be an empty file, or a file that only contains variables or mixins.
        if (css.trim() === '') {
          return { css, map: emptySourceMap, syntax }
        }

        throw new Error('Less did not return a source map.')
      }

      return { css, map: JSON.parse(map), syntax }
    } catch (error) {
      if (!isLessError(error)) {
        throw error
      }

      const { column, filename, line, message } = error
      if (filename === fileName) {
        const { length, start } = getErrorSpan(content, line, column)
        return {
          diagnostics: [{ messageText: message, start, length, code: 4001 }]
        }
      }

      // The error is in another file, such as one loaded using `@import`. Its span can’t be
      // reported in this file, so the location is added to the message instead.
      let messageText = message
      if (filename) {
        const path = relative(dirname(fileName), filename)
        messageText += ` (${path}:${line}:${column + 1})`
      }

      return {
        diagnostics: [{ messageText, start: 0, length: 0, code: 4001 }]
      }
    }
  }
})
