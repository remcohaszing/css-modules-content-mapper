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

export = styles

````

## Mappings

- `a` → `a`
- `b` → `b`
