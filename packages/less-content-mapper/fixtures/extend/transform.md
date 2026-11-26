## Text

````ts
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

export default styles

/**
 * ```less
 * .a {
 *   color: red;
 * }
 * ```
 */
declare const a: string

export { a, }


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
declare const b: string

export { b, }


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
declare const c: string

export { c, }


/**
 * ```less
 * .a {
 *   color: red;
 * }
 * ```
 */
declare const d: string

export { d, }


````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `a`      |   1 | `a`     |  89 |      ✓     |      ✓     |
| `b`      |  23 | `b`     | 231 |      ✓     |      ✓     |
| `c`      |  60 | `c`     | 369 |      ✓     |      ✓     |
| `d`      | 167 | `d`     | 445 |      ✓     |      ✓     |
| `a`      |   1 | `a`     | 551 |      ✓     |      ✓     |
| `b`      |  23 | `b`     | 714 |      ✓     |      ✓     |
| `c`      |  60 | `c`     | 873 |      ✓     |      ✓     |
| `d`      | 167 | `d`     | 970 |      ✓     |      ✓     |
