/**
 * @import { Syntax } from 'css-modules-content-mapper'
 */

import { createBraceSyntax, isInLineComment } from 'css-modules-content-mapper'

export const scssSyntax = createBraceSyntax('#')

/**
 * Create the syntax rules for the indented syntax, which uses indentation instead of braces.
 *
 * @returns {Syntax}
 *   The syntax rules.
 */
function createIndentedSyntax() {
  return {
    findSelectorEnd(content, offset) {
      for (let index = offset; index < content.length; index += 1) {
        const char = content[index]
        if (char === '#' && content[index + 1] === '{') {
          index = content.indexOf('}', index)
          if (index === -1) {
            break
          }
        } else if (char === '{' || char === ';' || char === '}' || char === '\n') {
          return index
        }
      }
      return content.length
    },

    findRuleEnd(content, offset) {
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
    },

    // This rules out matches in line comments, in declarations such as
    // `background: url(icons.png)`, and in statements such as `@include mixins.name`.
    isSelector(content, offset) {
      const lineStart = content.lastIndexOf('\n', offset - 1) + 1
      if (isInLineComment(content, lineStart, offset)) {
        return false
      }

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
    },

    findTokenEnd: scssSyntax.findTokenEnd
  }
}

export const indentedSyntax = createIndentedSyntax()
