# css-modules-content-mapper

## 0.3.0

### Minor Changes

- [#6](https://github.com/remcohaszing/css-modules-content-mapper/pull/6)
  [`421c9e8`](https://github.com/remcohaszing/css-modules-content-mapper/commit/421c9e85d8c316c99aa212903380b11475c533af) -
  Export `createBraceSyntax` and `isInLineComment`, so preprocessor adapters can share syntax rules.
  Allow `preprocess` to return a promise, add the optional `findTokenStart` syntax rule, and report
  invalid source maps as diagnostics instead of failing the request.

- [#5](https://github.com/remcohaszing/css-modules-content-mapper/pull/5)
  [`fe8dcfa`](https://github.com/remcohaszing/css-modules-content-mapper/commit/fe8dcfac11ad596f7f84c390563f28f66c702f15) -
  Support preprocessor adapters (`preprocess`, `validateOptions`, `dispose`), and report invalid
  `localsConvention` options in TypeScript’s style.

### Patch Changes

- [`b5fc148`](https://github.com/remcohaszing/css-modules-content-mapper/commit/b5fc14808bd4b5c9ed1be125f54543cc3262cf62) -
  Expose a programmatic interface.

- [`90deae1`](https://github.com/remcohaszing/css-modules-content-mapper/commit/90deae1387ccbe1beb463c33a98343d96ca09da1) -
  Enable the references feature for export span mappings.
