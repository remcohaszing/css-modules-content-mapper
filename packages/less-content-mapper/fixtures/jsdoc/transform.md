## Text

````ts
declare const styles: {
/**
 *
 * Comment for `a`.
 * ```less
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
 * ```less
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
 * ```less
 * .a {
 *   color: #ff0000;
 *   .b {
 *     color: green;
 *   }
 * }
 * ```
 */
declare const a: string

export { a, }


/**
 * `b` comment
 * ```less
 *   .b {
 *     color: green;
 *   }
 * ```
 */
declare const b: string

export { b, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      | 29 | `a`     | 154 |      ✓     |      ✓     |
| `b`      | 76 | `b`     | 253 |      ✓     |      ✓     |
| `a`      | 29 | `a`     | 424 |      ✓     |      ✓     |
| `b`      | 76 | `b`     | 544 |      ✓     |      ✓     |
