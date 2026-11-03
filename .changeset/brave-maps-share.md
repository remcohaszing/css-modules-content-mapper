---
'css-modules-content-mapper': minor
---

Export `createBraceSyntax` and `isInLineComment`, so preprocessor adapters can share syntax rules.
Allow `preprocess` to return a promise, add the optional `findTokenStart` syntax rule, and report
invalid source maps as diagnostics instead of failing the request.
