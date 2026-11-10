## Text

````mts
declare const styles: {
/**
 */
readonly index: string

/**
 * ```scss
 * .local {
 *   @include red;
 * }
 * ```
 */
readonly local: string
}

export default styles

/**
 */
export declare const index: string

/**
 * ```scss
 * .local {
 *   @include red;
 * }
 * ```
 */
export declare const local: string

````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `local`  | 135 | `local` | 127 |      ✓     |      ✓     |
| `local`  | 135 | `local` | 294 |      ✓     |      ✓     |
