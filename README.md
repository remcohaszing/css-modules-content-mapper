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
- [CSS variants](#css-variants)
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

## Editor support

In addition to type checking, this content mapper also provides useful editor integrations.

- _“Go to Definition”_ in a TypeScript file will take you to the matching CSS class or ID.
- Hovering an imported class in TypeScript will show the CSS definitions.
- Like TypeScript values, CSS classes and IDs can be documented with JSDoc comments (`/**  */`).

## Options

- `localsConvention` (`'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly' | 'all' | 'none'`):
  Style of exported classnames, the keys in your json. For more information, see
  [`postcss-modules`](https://github.com/madyankin/postcss-modules#localsconvention).

## CSS variants

This project uses [`postcss-safe-parser`](https://github.com/postcss/postcss-safe-parser), a
fault-tolerant CSS parser. That means it will work even if your CSS has syntax errors. Because of
this, the content mapper can work while your are typing, and possibly even support languages like
[Sass](https://sass-lang.com) or [Less](https://lesscss.org). However, support is not guaranteed.
This also means this does **not** check CSS validity.

## Compatibility

This projects works with TypeScript 7.1 or greater and requires Node.js 22 or greater.

## Security

By passing using content mappers, you are breaking TypeScript’s trust boundary that `tsc` wouldn’t
run third party code.

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
