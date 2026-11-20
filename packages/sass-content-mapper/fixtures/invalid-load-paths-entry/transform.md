## Text

````ts
declare const styles: {
/**
 */
readonly library: string

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
 */
declare const library: string

export { library as library, }


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

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `local`  | 112 | `local` | 131 |      ✓     |      ✓     |
| `local`  | 112 | `local` | 321 |      ✓     |      ✓     |

## Option diagnostics

- `loadPaths[1]`: `Content mapper option 'loadPaths' requires a value of type string.`
