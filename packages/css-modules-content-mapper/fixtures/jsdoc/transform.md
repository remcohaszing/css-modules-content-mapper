## Text

````cts
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

export = styles

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      | 35 | `a`     | 174 |      ✓     |      ✓     |
| `b`      | 63 | `b`     | 251 |      ✓     |      ✓     |
