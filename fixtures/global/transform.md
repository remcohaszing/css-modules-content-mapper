## Text

````ts
declare const styles: {
/**
 * ```css
 * .a :global(.b) .c {
 * }
 * ```
 */
readonly a: string

/**
 * ```css
 * .a :global(.b) .c {
 * }
 * ```
 */
readonly c: string

/**
 * ```css
 * .d :global .e :local .f {
 * }
 * ```
 */
readonly d: string

/**
 * ```css
 * .d :global .e :local .f {
 * }
 * ```
 */
readonly f: string

/**
 * ```css
 * :global(.g) :not(.h) {
 * }
 * ```
 */
readonly h: string

/**
 * ```css
 * :global .l,
 * .m {
 * }
 * ```
 */
readonly m: string

/**
 * ```css
 * :global .n :local(.o) {
 * }
 * ```
 */
readonly o: string
}

export = styles

````

## Mappings

- `a` → `a`
- `c` → `c`
- `d` → `d`
- `f` → `f`
- `h` → `h`
- `m` → `m`
- `o` → `o`
