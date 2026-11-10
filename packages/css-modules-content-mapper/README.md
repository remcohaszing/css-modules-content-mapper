# css-modules-content-mapper

[![github actions](https://github.com/remcohaszing/css-modules-content-mapper/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/css-modules-content-mapper/actions/workflows/ci.yaml)
[![npm version](https://img.shields.io/npm/v/css-modules-content-mapper)](https://www.npmjs.com/package/css-modules-content-mapper)
[![npm downloads](https://img.shields.io/npm/dm/css-modules-content-mapper)](https://www.npmjs.com/package/css-modules-content-mapper)

A [TypeScript](https://www.typescriptlang.org) content mapper for
[CSS modules](https://github.com/css-modules/css-modules).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Editor support](#editor-support)
- [Options](#options)
- [CSS syntax](#css-syntax)
- [Compatibility](#compatibility)
- [Security](#security)
- [License](#license)

## Installation

```sh
npm install css-modules-content-mapper
```

## Usage

In your `tsconfig.json`, add `css-modules-content-mapper` to the `contentMappers` array.

```jsonc
{
  "compilerOptions": {
    // …
  },
  "contentMappers": [
    {
      "package": "css-modules-content-mapper",
      "extensions": [".module.css"],
      "options": {
        // Optional options…
      }
    }
  ]
}
```

Now run `tsc` with the `--runExternalCode` flag.

```sh
tsc --runExternalCode
```

If your code uses undefined CSS module classes, this will show an error.

The default export has a property for every class. A class can also be imported by name if its name
works as a JavaScript identifier.

```ts
import styles, { title } from './example.module.css'

// The `.title` class.
console.log(title)

// The same class.
console.log(styles.title)

// The `.is-active` class. Its name isn’t an identifier, so it isn’t a named export.
console.log(styles['is-active'])
```

## Editor support

In addition to type checking, this content mapper also provides useful editor integrations. This
project uses [`postcss-safe-parser`](https://github.com/postcss/postcss-safe-parser), a
fault-tolerant CSS parser. That means it will work even if your CSS has syntax errors, for example
while you are typing.

- _“Go to Definition”_ in a TypeScript file will take you to the matching CSS class or ID.
- Hovering an imported class in TypeScript will show the CSS definitions.
- Like TypeScript values, CSS classes and IDs can be documented with JSDoc comments (`/**  */`).

## Options

- `defaultExport` (`boolean`, default `true`): Whether to generate a default export, an object with
  a property for every class. Set this to `false` if your bundler only generates named exports, as
  [webpack’s native CSS support](https://webpack.js.org/guides/native-css/#css-modules) does unless
  you configure it otherwise. Every class is then a named export. This includes a class named
  `default`, so a default import gives you that class. A class whose name isn’t a valid identifier
  has to be imported under another name, for example
  `import { 'is-active' as isActive } from './example.module.css'`. TypeScript doesn’t support such
  imports if the `module` compiler option is `es2015` or `es2020`.
- `localsConvention` (`'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly' | 'all' | 'none'`):
  Style of exported classnames, the keys in your json. For more information, see
  [`postcss-modules`](https://github.com/madyankin/postcss-modules#localsconvention).

## CSS syntax

This project does **not** check CSS validity. You can use a linter, such as
[Stylelint](https://stylelint.io), for that. This project also doesn’t support CSS variants. For
[Sass](https://sass-lang.com), use
[`sass-content-mapper`](https://github.com/remcohaszing/css-modules-content-mapper/tree/main/packages/sass-content-mapper).
Support for [Less](https://lesscss.org) is coming soon.

## Compatibility

This projects works with TypeScript 7.1 or greater and requires Node.js 22 or greater.

## Security

Normally, `tsc` is a self-contained binary that doesn’t execute third party code. By using content
mappers, you are deliberately breaking this trust boundary.

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing),
[Brody McKee](https://github.com/mrmckeb)
