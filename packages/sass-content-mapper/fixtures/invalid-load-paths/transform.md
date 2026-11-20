## Text

````ts
declare const styles: {
/**
 * ```scss
 * .local {
 *   color: #ff0000;
 * }
 * ```
 */
readonly local: string
}

export default styles

/**
 * ```scss
 * .local {
 *   color: #ff0000;
 * }
 * ```
 */
declare const local: string

export { local as local, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `local`  | 60 | `local` |  97 |      ✓     |      ✓     |
| `local`  | 60 | `local` | 215 |      ✓     |      ✓     |

## Option diagnostics

- `loadPaths`: `Content mapper option 'loadPaths' requires a value of type Array.`
