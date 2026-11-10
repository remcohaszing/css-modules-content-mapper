## Text

````cts
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
 * :global(.l),
 * .m {
 * }
 * ```
 */
readonly m: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `a`      |   1 | `a`     |  86 |      ✓     |      ✓     |
| `c`      |  16 | `c`     | 159 |      ✓     |      ✓     |
| `d`      |  24 | `d`     | 238 |      ✓     |      ✓     |
| `f`      |  45 | `f`     | 317 |      ✓     |      ✓     |
| `h`      |  70 | `h`     | 393 |      ✓     |      ✓     |
| `m`      | 134 | `m`     | 467 |      ✓     |      ✓     |
