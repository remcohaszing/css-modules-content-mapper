# sass-content-mapper

[![github actions](https://github.com/remcohaszing/css-modules-content-mapper/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/css-modules-content-mapper/actions/workflows/ci.yaml)
[![npm version](https://img.shields.io/npm/v/sass-content-mapper)](https://www.npmjs.com/package/sass-content-mapper)
[![npm downloads](https://img.shields.io/npm/dm/sass-content-mapper)](https://www.npmjs.com/package/sass-content-mapper)

A [TypeScript](https://www.typescriptlang.org) content mapper for [Sass](https://sass-lang.com)
[CSS modules](https://github.com/css-modules/css-modules).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Editor support](#editor-support)
- [Options](#options)
- [Sass syntax](#sass-syntax)
- [Compatibility](#compatibility)
- [Security](#security)
- [License](#license)

## Installation

```sh
npm install sass-content-mapper sass-embedded
```

This content mapper uses the Sass implementation your project already has, so your styles are
compiled with the same version of Sass your build uses, and the types match your build output. It
works with either [`sass-embedded`](https://www.npmjs.com/package/sass-embedded) or
[`sass`](https://www.npmjs.com/package/sass).

If both are installed, `sass-embedded` is used, because it’s significantly faster. In large projects
this makes a noticeable difference to how quickly types update in your editor. Build tools such as
Vite and sass-loader make the same choice.

## Usage

In your `tsconfig.json`, add `sass-content-mapper` to the `contentMappers` array.

```jsonc
{
  "compilerOptions": {
    // …
  },
  "contentMappers": [
    {
      "package": "sass-content-mapper",
      "extensions": [".module.scss", ".module.sass"],
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
file is compiled with Sass, and the source map is used to map classes back to your Sass code.

- _“Go to Definition”_ in a TypeScript file will take you to the matching Sass class or ID. For a
  generated class, such as `.block--modifier` from `&--modifier`, it takes you to the selector that
  generated it.
- Hovering an imported class in TypeScript will show the Sass definitions.
- Like TypeScript values, Sass classes and IDs can be documented with JSDoc comments (`/**  */`).

Classes from other files, for example from a mixin in a partial, are typed, but _“Go to Definition”_
doesn’t work for them.

In your editor, changes to a file you `@use` or `@import`, such as a partial, don’t update the types
of the files that import it straight away. They’re updated when the importing file changes, or when
you restart the TypeScript server. This doesn’t affect `tsc`, which always compiles every file from
scratch.

If a file can’t be compiled, for example while you are typing, the types from the last successful
compile are kept.

## Options

- `localsConvention` (`'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly' | 'all' | 'none'`):
  Style of exported classnames, the keys in your json. For more information, see
  [`postcss-modules`](https://github.com/madyankin/postcss-modules#localsconvention).
- `loadPaths` (`string[]`): Additional
  [load paths](https://sass-lang.com/documentation/js-api/interfaces/options/#loadPaths), relative
  to your `tsconfig.json`. The `node_modules` folder next to your `tsconfig.json` is always a load
  path, and [`pkg:` URLs](https://sass-lang.com/documentation/at-rules/use/#pkg-urls) are supported.

## Sass syntax

This project uses Sass itself, so it supports everything your version of Sass supports, including
the indented syntax. Like your build, Sass doesn’t output rules without declarations, so their
classes aren’t exported.

`@import` works, but it’s
[deprecated in Sass](https://sass-lang.com/documentation/breaking-changes/import/). Use `@use`
instead.

## Compatibility

This project works with TypeScript 7.1 or greater and `sass-embedded` or `sass` 1.71.1 or greater,
and requires Node.js 22 or greater.

## Security

Normally, `tsc` is a self-contained binary that doesn’t execute third party code. By using content
mappers, you are deliberately breaking this trust boundary.

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing),
[Brody McKee](https://github.com/mrmckeb)
