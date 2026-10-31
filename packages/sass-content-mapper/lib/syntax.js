/**
 * @import { Syntax } from 'css-modules-content-mapper'
 */

// These rules are heuristics. They handle selectors, nesting, interpolation, line comments, and
// statements such as `@include`, which covers how classes are written in practice. They don’t
// tokenize Sass, so a class name inside a block comment or a string followed by `{` can be
// mistaken for a selector.

/**
 * Matches a selector token that may generate a class, such as `&-suffix` or `#{interpolation}`.
 */
const generatedToken = /(?:#{[^}]*}|[^\s()+,.:>[\]{}~])+/y

/**
 * Find the end of a selector token.
 *
 * @param {string} content
 *   The Sass source.
 * @param {number} offset
 *   The start offset of the token.
 * @returns {number}
 *   The offset where the token ends, or the start offset if there is no token.
 */
function findTokenEnd(content, offset) {
  generatedToken.lastIndex = offset
  return generatedToken.test(content) ? generatedToken.lastIndex : offset
}

/**
 * Find the end of a selector.
 *
 * @param {string} content
 *   The Sass source.
 * @param {number} offset
 *   The start offset of the selector.
 * @param {boolean} indented
 *   Whether the source uses the indented syntax.
 * @returns {number}
 *   The offset where the selector ends.
 */
function findSelectorEnd(content, offset, indented) {
  for (let index = offset; index < content.length; index += 1) {
    const char = content[index]
    if (char === '#' && content[index + 1] === '{') {
      index = content.indexOf('}', index)
      if (index === -1) {
        break
      }
    } else if (char === '{' || char === ';' || char === '}' || (indented && char === '\n')) {
      return index
    }
  }
  return content.length
}

/**
 * Find the end of a rule.
 *
 * @param {string} content
 *   The Sass source.
 * @param {number} offset
 *   The start offset of the rule.
 * @param {boolean} indented
 *   Whether the source uses the indented syntax.
 * @returns {number}
 *   The offset where the rule ends.
 */
function findRuleEnd(content, offset, indented) {
  if (indented) {
    const lineStart = content.lastIndexOf('\n', offset - 1) + 1
    const indent = offset - lineStart
    let end = content.indexOf('\n', offset)
    if (end === -1) {
      return content.length
    }
    let next = end + 1
    while (next < content.length) {
      let lineEnd = content.indexOf('\n', next)
      if (lineEnd === -1) {
        lineEnd = content.length
      }
      const line = content.slice(next, lineEnd)
      if (line.trim()) {
        if (line.length - line.trimStart().length <= indent) {
          break
        }
        end = lineEnd
      }
      next = lineEnd + 1
    }
    return end
  }

  let depth = 0
  for (let index = offset; index < content.length; index += 1) {
    const char = content[index]
    if (char === '#' && content[index + 1] === '{') {
      index = content.indexOf('}', index)
      if (index === -1) {
        break
      }
    } else if (char === '{') {
      depth += 1
    } else if (char === '}') {
      depth -= 1
      if (depth === 0) {
        return index + 1
      }
    }
  }
  return content.length
}

/**
 * Check whether an offset is in a line comment.
 *
 * `//` in a string, such as in `a[href^="https://"]`, doesn’t start a comment.
 *
 * @param {string} content
 *   The Sass source.
 * @param {number} lineStart
 *   The start offset of the line.
 * @param {number} offset
 *   The offset to check.
 * @returns {boolean}
 *   Whether the offset is in a line comment.
 */
function isInLineComment(content, lineStart, offset) {
  /** @type {string | undefined} */
  let quote
  for (let index = lineStart; index < offset; index += 1) {
    const char = content[index]
    if (quote) {
      if (char === '\\') {
        index += 1
      } else if (char === quote) {
        quote = undefined
      }
    } else if (char === '"' || char === "'") {
      quote = char
    } else if (char === '/' && content[index + 1] === '/') {
      return true
    }
  }
  return false
}

/**
 * Check whether an offset is part of a selector.
 *
 * This rules out matches in line comments, in declarations such as `background: url(icons.png)`,
 * and in statements such as `@include mixins.name;`.
 *
 * @param {string} content
 *   The Sass source.
 * @param {number} offset
 *   The offset to check.
 * @param {boolean} indented
 *   Whether the source uses the indented syntax.
 * @returns {boolean}
 *   Whether the offset is part of a selector.
 */
function isSelector(content, offset, indented) {
  const lineStart = content.lastIndexOf('\n', offset - 1) + 1
  if (isInLineComment(content, lineStart, offset)) {
    return false
  }

  if (indented) {
    let lineEnd = content.indexOf('\n', offset)
    if (lineEnd === -1) {
      lineEnd = content.length
    }
    const line = content.slice(lineStart, lineEnd)
    if (/^\s*[$+=@]/.test(line)) {
      return false
    }

    // A selector list may continue on the next line.
    if (line.trimEnd().endsWith(',')) {
      return true
    }

    // A selector is followed by a more indented block, whereas a declaration isn’t.
    const indent = line.length - line.trimStart().length
    let next = lineEnd + 1
    while (next < content.length) {
      let nextEnd = content.indexOf('\n', next)
      if (nextEnd === -1) {
        nextEnd = content.length
      }
      const nextLine = content.slice(next, nextEnd)
      if (nextLine.trim()) {
        return nextLine.length - nextLine.trimStart().length > indent
      }
      next = nextEnd + 1
    }
    return false
  }

  return content[findSelectorEnd(content, offset, false)] === '{'
}

/**
 * Create the syntax rules for SCSS or the indented syntax.
 *
 * @param {boolean} indented
 *   Whether to create rules for the indented syntax.
 * @returns {Syntax}
 *   The syntax rules.
 */
function createSyntax(indented) {
  return {
    findSelectorEnd: (content, offset) => findSelectorEnd(content, offset, indented),
    findRuleEnd: (content, offset) => findRuleEnd(content, offset, indented),
    isSelector: (content, offset) => isSelector(content, offset, indented),
    findTokenEnd
  }
}

export const scssSyntax = createSyntax(false)

export const indentedSyntax = createSyntax(true)
