## Text

````ts
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
declare const a: string

export { a, }


/**
 * `b` comment
 * ```css
 *   .b {
 *   }
 * ```
 */
declare const b: string

export { b, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      | 35 | `a`     | 174 |      ✓     |      ✓     |
| `b`      | 63 | `b`     | 251 |      ✓     |      ✓     |
| `a`      | 35 | `a`     | 442 |      ✓     |      ✓     |
| `b`      | 63 | `b`     | 540 |      ✓     |      ✓     |
