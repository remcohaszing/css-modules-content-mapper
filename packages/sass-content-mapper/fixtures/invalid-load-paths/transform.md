## Text

````mts
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
export declare const local: string

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `local`  | 60 | `local` |  97 |      ✓     |      ✓     |
| `local`  | 60 | `local` | 222 |      ✓     |      ✓     |

## Option diagnostics

- `loadPaths`: `Content mapper option 'loadPaths' requires a value of type Array.`
