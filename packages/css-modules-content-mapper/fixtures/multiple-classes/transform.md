## Text

````cts
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

export = styles

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      |  1 | `a`     | 118 |      ✓     |      ✓     |
| `b`      |  8 | `b`     | 180 |      ✓     |      ✓     |
