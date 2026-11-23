---
'css-modules-content-mapper': patch
---

Handle name clashes in generated types for classes named `styles`, `default`, or `$0`, and skip
duplicate named exports when classes map to the same local name.
