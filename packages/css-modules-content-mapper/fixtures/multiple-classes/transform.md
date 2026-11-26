## Text

````ts
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
declare const a: string

export { a, }


/**
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
| `a`      |  1 | `a`     | 118 |      ✓     |      ✓     |
| `b`      |  8 | `b`     | 180 |      ✓     |      ✓     |
| `a`      |  1 | `a`     | 315 |      ✓     |      ✓     |
| `b`      |  8 | `b`     | 398 |      ✓     |      ✓     |
