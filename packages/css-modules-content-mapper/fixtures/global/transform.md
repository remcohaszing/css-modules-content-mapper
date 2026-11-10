## Text

````mts
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

export default styles

/**
 * ```css
 * .a :global(.b) .c {
 * }
 * ```
 */
export declare const a: string

/**
 * ```css
 * .a :global(.b) .c {
 * }
 * ```
 */
export declare const c: string

/**
 * ```css
 * .d :global .e :local .f {
 * }
 * ```
 */
export declare const d: string

/**
 * ```css
 * .d :global .e :local .f {
 * }
 * ```
 */
export declare const f: string

/**
 * ```css
 * :global(.g) :not(.h) {
 * }
 * ```
 */
export declare const h: string

/**
 * ```css
 * :global(.l),
 * .m {
 * }
 * ```
 */
export declare const m: string

````

## Alias mappings

| Original |     | Virtual |      | Definition | References |
| -------- | --: | ------- | ---: | :--------: | :--------: |
| `a`      |   1 | `a`     |   86 |      ✓     |      ✓     |
| `c`      |  16 | `c`     |  159 |      ✓     |      ✓     |
| `d`      |  24 | `d`     |  238 |      ✓     |      ✓     |
| `f`      |  45 | `f`     |  317 |      ✓     |      ✓     |
| `h`      |  70 | `h`     |  393 |      ✓     |      ✓     |
| `m`      | 134 | `m`     |  467 |      ✓     |      ✓     |
| `a`      |   1 | `a`     |  577 |      ✓     |      ✓     |
| `c`      |  16 | `c`     |  662 |      ✓     |      ✓     |
| `d`      |  24 | `d`     |  753 |      ✓     |      ✓     |
| `f`      |  45 | `f`     |  844 |      ✓     |      ✓     |
| `h`      |  70 | `h`     |  932 |      ✓     |      ✓     |
| `m`      | 134 | `m`     | 1018 |      ✓     |      ✓     |
