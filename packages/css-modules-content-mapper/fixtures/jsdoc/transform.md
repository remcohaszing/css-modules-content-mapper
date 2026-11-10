## Text

````mts
declare const styles: {
/**
 *
 * First comment for `a`.
 * ```css
 * .a {
 *   .b {
 *   }
 * }
 * ```
 * Second comment for `a`.
 * ```css
 * .a {
 * }
 * ```
 */
readonly a: string

/**
 * `b` comment
 * ```css
 *   .b {
 *   }
 * ```
 */
readonly b: string
}

export default styles

/**
 *
 * First comment for `a`.
 * ```css
 * .a {
 *   .b {
 *   }
 * }
 * ```
 * Second comment for `a`.
 * ```css
 * .a {
 * }
 * ```
 */
export declare const a: string

/**
 * `b` comment
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
| `a`      | 35 | `a`     | 174 |      ✓     |      ✓     |
| `b`      | 63 | `b`     | 251 |      ✓     |      ✓     |
| `a`      | 35 | `a`     | 449 |      ✓     |      ✓     |
| `b`      | 63 | `b`     | 538 |      ✓     |      ✓     |
