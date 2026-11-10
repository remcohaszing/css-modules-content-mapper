## Text

````mts
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
export declare const library: string

/**
 * ```scss
 * .local {
 *   color: #ff0000;
 * }
 * ```
 */
export declare const local: string

````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `local`  | 112 | `local` | 131 |      ✓     |      ✓     |
| `local`  | 112 | `local` | 302 |      ✓     |      ✓     |

## Option diagnostics

- `loadPaths[1]`: `Content mapper option 'loadPaths' requires a value of type string.`
