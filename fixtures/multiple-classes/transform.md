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
readonly "a": string

/**
 * ```css
 *   .b {
 *   }
 * ```
 */
readonly "b": string
}

export = styles

````

## Mappings

- `a` → `"a"`
- `b` → `"b"`
