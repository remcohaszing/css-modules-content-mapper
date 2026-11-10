/**
 * @import { Syntax } from './core.js'
 */

// These rules are heuristics. They handle selectors, nesting, interpolation, line comments, and
// statements such as mixin calls, which covers how classes are written in practice. They don’t
// tokenize the source, so a class name inside a block comment or a string followed by `{` can be
// mistaken for a selector.

/**
 * Check whether an offset is in a line comment.
 *
 * `//` in a string, such as in `a[href^="https://"]`, doesn’t start a comment.
 *
 * @param {string} content
 *   The source.
 * @param {number} lineStart
 *   The start offset of the line.
 * @param {number} offset
 *   The offset to check.
 * @returns {boolean}
 *   Whether the offset is in a line comment.
 */
export function isInLineComment(content, lineStart, offset) {
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
 * Skip a comment, a string, or `url()`, because their braces aren’t part of the syntax.
 *
 * @param {string} content
 *   The source.
 * @param {number} index
 *   The offset to check.
 * @returns {number}
 *   The offset of the last character to skip, or the given offset if there’s nothing to skip.
 */
function skipNonCode(content, index) {
  const char = content[index]
  if (char === '/' && content[index + 1] === '*') {
    const end = content.indexOf('*/', index + 2)
    return end === -1 ? content.length : end + 1
  }

  if (char === '/' && content[index + 1] === '/') {
    const end = content.indexOf('\n', index)
    return end === -1 ? content.length : end
  }

  if (char === '"' || char === "'") {
    for (let end = index + 1; end < content.length; end += 1) {
      if (content[end] === '\\') {
        end += 1
      } else if (content[end] === char || content[end] === '\n') {
        return end
      }
    }
    return content.length
  }

  if (content.startsWith('url(', index)) {
    const end = content.indexOf(')', index)
    return end === -1 ? content.length : end
  }

  return index
}

/**
 * Create the syntax rules for a language that uses braces, such as Less or SCSS.
 *
 * @param {string} interpolationPrefix
 *   The character before the `{` that starts an interpolation, such as `@` in `@{name}` or `#` in
 *   `#{name}`.
 * @returns {Syntax}
 *   The syntax rules.
 */
export function createBraceSyntax(interpolationPrefix) {
  /**
   * Matches a selector token that may generate a class, such as `&-suffix` or an interpolation.
   */
  const generatedToken = new RegExp(`(?:${interpolationPrefix}{[^}]*}|[^\\s()+,.:>[\\]{}~])+`, 'y')

  /**
   * Get the start of a token. Less maps a selector that starts with an interpolation to the `{`,
   * instead of to the start of the interpolation.
   *
   * @param {string} content
   *   The source.
   * @param {number} offset
   *   The offset to check.
   * @returns {number}
   *   The offset where the token starts.
   */
  function findTokenStart(content, offset) {
    return content[offset] === '{' && content[offset - 1] === interpolationPrefix
      ? offset - 1
      : offset
  }

  /**
   * Find the end of a selector.
   *
   * @param {string} content
   *   The source.
   * @param {number} offset
   *   The start offset of the selector.
   * @returns {number}
   *   The offset where the selector ends.
   */
  function findSelectorEnd(content, offset) {
    for (let index = findTokenStart(content, offset); index < content.length; index += 1) {
      const char = content[index]
      if (char === interpolationPrefix && content[index + 1] === '{') {
        index = content.indexOf('}', index)
        if (index === -1) {
          break
        }
      } else if (char === '{' || char === ';' || char === '}') {
        return index
      }
    }
    return content.length
  }

  return {
    findTokenStart,

    findSelectorEnd,

    findRuleEnd(content, offset) {
      let depth = 0
      for (let index = findTokenStart(content, offset); index < content.length; index += 1) {
        index = skipNonCode(content, index)
        const char = content[index]
        if (char === interpolationPrefix && content[index + 1] === '{') {
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
    },

    // This rules out matches in line comments, in declarations such as
    // `background: url(icons.png)`, and in statements such as mixin calls.
    isSelector(content, offset) {
      const lineStart = content.lastIndexOf('\n', offset - 1) + 1
      if (isInLineComment(content, lineStart, offset)) {
        return false
      }

      return content[findSelectorEnd(content, offset)] === '{'
    },

    findTokenEnd(content, offset) {
      generatedToken.lastIndex = findTokenStart(content, offset)
      return generatedToken.test(content) ? generatedToken.lastIndex : offset
    }
  }
}
