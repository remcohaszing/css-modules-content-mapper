## Text

````mts
declare const styles: {
/**
 * ```css
 * .a {
 *   .b {
 *   }
 * }
 * ```
 * ```css
 * .a {
 * }
 * ```
 */
readonly a: string

/**
 * ```css
 *   .b {
 *   }
 * ```
 */
readonly b: string
}

export default styles

/**
 * ```css
 * .a {
 *   .b {
 *   }
 * }
 * ```
 * ```css
 * .a {
 * }
 * ```
 */
export declare const a: string

/**
 * ```css
 *   .b {
 *   }
 * ```
 */
export declare const b: string

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      |  1 | `a`     | 118 |      ✓     |      ✓     |
| `b`      |  8 | `b`     | 180 |      ✓     |      ✓     |
| `a`      |  1 | `a`     | 322 |      ✓     |      ✓     |
| `b`      |  8 | `b`     | 396 |      ✓     |      ✓     |
