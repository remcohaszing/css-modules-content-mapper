/**
 * Words that can’t be used as a binding name in a module.
 *
 * This list is effectively frozen. New keywords can’t be reserved without breaking existing code,
 * so since ES2015 they have all been contextual, such as `async`, `of`, and `using`, and remain
 * valid binding names.
 *
 * @see https://tc39.es/ecma262/#prod-ReservedWord
 * @see https://tc39.es/ecma262/#sec-identifiers-static-semantics-early-errors
 */
export const reservedWords = new Set([
  // ReservedWord
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
  // Reserved in strict mode code, which includes modules.
  'implements',
  'interface',
  'let',
  'package',
  'private',
  'protected',
  'public',
  'static',
  // Not reserved, but can’t be a binding name in strict mode code.
  'arguments',
  'eval'
])
