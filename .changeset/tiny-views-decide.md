---
'css-modules-content-mapper': minor
'sass-content-mapper': minor
---

Add the `defaultExport` option. Set it to `false` if your bundler only generates named exports.

The generated types are now an ES module instead of a CommonJS module. Every class is still a
property of the default export, and can still be imported by name if its name works as a JavaScript
identifier. Other classes, such as `.foo-bar`, can no longer be imported by name unless
`defaultExport` is `false`.

Class names are now also mapped for “Find All References”.
