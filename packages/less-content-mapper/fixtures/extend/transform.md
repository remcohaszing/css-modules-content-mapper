## Text

````cts
declare const styles: {
/**
 * ```less
 * .a {
 *   color: red;
 * }
 * ```
 */
readonly a: string

/**
 * ```less
 * .a {
 *   color: red;
 * }
 * ```
 * ```less
 * .b {
 *   &:extend(.a);
 *   margin: 0;
 * }
 * ```
 */
readonly b: string

/**
 * ```less
 * .a {
 *   color: red;
 * }
 * ```
 * ```less
 * .c:extend(.a all) {
 *   margin: 0;
 * }
 * ```
 */
readonly c: string

/**
 * ```less
 * .a {
 *   color: red;
 * }
 * ```
 */
readonly d: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual |     | Definition |
| -------- | --: | ------- | --: | :--------: |
| `a`      |   1 | `a`     |  89 |      ✓     |
| `b`      |  23 | `b`     | 231 |      ✓     |
| `c`      |  60 | `c`     | 369 |      ✓     |
| `d`      | 167 | `d`     | 445 |      ✓     |
