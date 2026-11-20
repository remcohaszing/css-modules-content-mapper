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
declare const a: string

export { a as a, }


/**
 * ```css
 * .a :global(.b) .c {
 * }
 * ```
 */
declare const c: string

export { c as c, }


/**
 * ```css
 * .d :global .e :local .f {
 * }
 * ```
 */
declare const d: string

export { d as d, }


/**
 * ```css
 * .d :global .e :local .f {
 * }
 * ```
 */
declare const f: string

export { f as f, }


/**
 * ```css
 * :global(.g) :not(.h) {
 * }
 * ```
 */
declare const h: string

export { h as h, }


/**
 * ```css
 * :global(.l),
 * .m {
 * }
 * ```
 */
declare const m: string

export { m as m, }


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
| `a`      |   1 | `a`     |  570 |      ✓     |      ✓     |
| `c`      |  16 | `c`     |  669 |      ✓     |      ✓     |
| `d`      |  24 | `d`     |  774 |      ✓     |      ✓     |
| `f`      |  45 | `f`     |  879 |      ✓     |      ✓     |
| `h`      |  70 | `h`     |  981 |      ✓     |      ✓     |
| `m`      | 134 | `m`     | 1081 |      ✓     |      ✓     |
