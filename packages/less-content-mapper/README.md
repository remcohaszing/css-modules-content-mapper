# less-content-mapper

[![github actions](https://github.com/remcohaszing/css-modules-content-mapper/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/css-modules-content-mapper/actions/workflows/ci.yaml)
[![npm version](https://img.shields.io/npm/v/less-content-mapper)](https://www.npmjs.com/package/less-content-mapper)
[![npm downloads](https://img.shields.io/npm/dm/less-content-mapper)](https://www.npmjs.com/package/less-content-mapper)

A [TypeScript](https://www.typescriptlang.org) content mapper for [Less](https://lesscss.org)
[CSS modules](https://github.com/css-modules/css-modules).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Editor support](#editor-support)
- [Options](#options)
- [Less syntax](#less-syntax)
- [Compatibility](#compatibility)
- [Security](#security)
- [License](#license)

## Installation

```sh
npm install less-content-mapper less
```

This content mapper uses the Less implementation your project already has, so your styles are
compiled with the same version of Less your build uses, and the types match your build output.

## Usage

In your `tsconfig.json`, add `less-content-mapper` to the `contentMappers` array.

```jsonc
{
  "compilerOptions": {
    // …
  },
  "contentMappers": [
    {
      "package": "less-content-mapper",
      "extensions": [".module.less"],
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

In addition to type checking, this content mapper also provides useful editor integrations. Each
file is compiled with Less, and the source map is used to map classes back to your Less code.

- _“Go to Definition”_ in a TypeScript file will take you to the matching Less class or ID. For a
  generated class, such as `.block--modifier` from `&--modifier`, it takes you to the selector that
  generated it.
- Hovering an imported class in TypeScript will show the Less definitions.
- Like TypeScript values, Less classes and IDs can be documented with JSDoc comments (`/**  */`).

Classes from other files, for example from a mixin in an imported file, are typed, but _“Go to
Definition”_ doesn’t work for them.

In your editor, changes to a file you `@import` don’t update the types of the files that import it
straight away. They’re updated when the importing file changes, or when you restart the TypeScript
server. This doesn’t affect `tsc`, which always compiles every file from scratch.

If a file can’t be compiled, for example while you are typing, the types from the last successful
compile are kept.

## Options

- `localsConvention` (`'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly' | 'all' | 'none'`):
  Style of exported classnames, the keys in your json. For more information, see
  [`postcss-modules`](https://github.com/madyankin/postcss-modules#localsconvention).

## Less syntax

This project uses Less itself, so it supports everything your version of Less supports. Like your
build, Less doesn’t output rules without declarations or mixins defined with parentheses, such as
`.mixin()`, so their classes aren’t exported.

Files are compiled with the default Less options. Options your build sets, such as
`javascriptEnabled` or `globalVars`, aren’t applied, so a file that depends on them, for example on
inline JavaScript or on a variable your build defines, is reported as an error.

## Compatibility

This project works with TypeScript 7.1 or greater and `less` 4.2.0 or greater, and requires Node.js
22 or greater.

Earlier Less 4 releases aren’t supported. Their source maps point interpolated selectors such as
`.text-@{color}` at the wrong location, which breaks _“Go to Definition”_ and hover previews for
those classes.

## Security

Normally, `tsc` is a self-contained binary that doesn’t execute third party code. By using content
mappers, you are deliberately breaking this trust boundary.

Less can also run JavaScript from a stylesheet using `@plugin`, even with inline JavaScript
disabled. This content mapper compiles your Less files, so those plugins run whenever TypeScript or
your editor processes them.

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing),
[Brody McKee](https://github.com/mrmckeb)
