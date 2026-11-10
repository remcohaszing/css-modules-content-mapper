## Text

````mts
declare const styles: {
/**
 */
readonly partial: string

/**
 * ```scss
 * .local {
 *   color: partial.$red;
 * }
 * ```
 */
readonly local: string
}

export default styles

/**
 */
export declare const partial: string

/**
 * ```scss
 * .local {
 *   color: partial.$red;
 * }
 * ```
 */
export declare const local: string

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `local`  | 84 | `local` | 136 |      ✓     |      ✓     |
| `local`  | 84 | `local` | 312 |      ✓     |      ✓     |
