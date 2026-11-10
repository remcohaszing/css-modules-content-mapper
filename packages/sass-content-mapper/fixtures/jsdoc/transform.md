## Text

````mts
declare const styles: {
/**
 *
 * Comment for `a`.
 * ```scss
 * .a {
 *   color: #ff0000;
 *   .b {
 *     color: green;
 *   }
 * }
 * ```
 */
readonly a: string

/**
 * `b` comment
 * ```scss
 *   .b {
 *     color: green;
 *   }
 * ```
 */
readonly b: string
}

export default styles

/**
 *
 * Comment for `a`.
 * ```scss
 * .a {
 *   color: #ff0000;
 *   .b {
 *     color: green;
 *   }
 * }
 * ```
 */
export declare const a: string

/**
 * `b` comment
 * ```scss
 *   .b {
 *     color: green;
 *   }
 * ```
 */
export declare const b: string

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      | 29 | `a`     | 154 |      ✓     |      ✓     |
| `b`      | 76 | `b`     | 253 |      ✓     |      ✓     |
| `a`      | 29 | `a`     | 431 |      ✓     |      ✓     |
| `b`      | 76 | `b`     | 542 |      ✓     |      ✓     |
