import { define } from '@remcohaszing/eslint'

export default define([
  { ignores: ['packages/css-modules-content-mapper/lib/protocol.ts', 'packages/*/fixtures'] },
  {
    rules: {
      'jsdoc/check-template-names': 'off'
    }
  }
])
