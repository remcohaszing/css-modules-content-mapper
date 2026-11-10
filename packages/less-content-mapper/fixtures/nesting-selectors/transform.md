## Text

````cts
declare const styles: {
/**
 * ```less
 *     .c {
 *       color: red;
 *     }
 * ```
 * ```less
 *     &-d {
 *       color: red;
 *     }
 * ```
 * ```less
 *   .e,
 *   .f {
 *     color: red;
 *   }
 * ```
 * ```less
 *   > .g {
 *     color: red;
 *   }
 * ```
 * ```less
 *   .h & {
 *     color: red;
 *   }
 * ```
 * ```less
 *   &:hover .i {
 *     color: red;
 *   }
 * ```
 * ```less
 *     .j {
 *       color: red;
 *     }
 * ```
 */
readonly a: string

/**
 * ```less
 *     .c {
 *       color: red;
 *     }
 * ```
 */
readonly b: string

/**
 * ```less
 *     .c {
 *       color: red;
 *     }
 * ```
 */
readonly c: string

/**
 * ```less
 *     &-d {
 *       color: red;
 *     }
 * ```
 */
readonly "b-d": string

/**
 * ```less
 *   .e,
 *   .f {
 *     color: red;
 *   }
 * ```
 */
readonly e: string

/**
 * ```less
 *   .e,
 *   .f {
 *     color: red;
 *   }
 * ```
 */
readonly f: string

/**
 * ```less
 *   > .g {
 *     color: red;
 *   }
 * ```
 */
readonly g: string

/**
 * ```less
 *   .h & {
 *     color: red;
 *   }
 * ```
 */
readonly h: string

/**
 * ```less
 *   &:hover .i {
 *     color: red;
 *   }
 * ```
 */
readonly i: string

/**
 * ```less
 *     .j {
 *       color: red;
 *     }
 * ```
 */
readonly j: string

/**
 * ```less
 *   .m {
 *     color: red;
 *   }
 * ```
 */
readonly k: string

/**
 * ```less
 *   .m {
 *     color: red;
 *   }
 * ```
 */
readonly m: string

/**
 * ```less
 *   .m {
 *     color: red;
 *   }
 * ```
 */
readonly l: string

/**
 * ```less
 *   &:hover {
 *     color: red;
 *   }
 * ```
 * ```less
 *   &.q {
 *     color: red;
 *   }
 * ```
 * ```less
 *     &.s {
 *       color: red;
 *     }
 * ```
 * ```less
 *     &:focus {
 *       color: red;
 *     }
 * ```
 * ```less
 *     & .t {
 *       color: red;
 *     }
 * ```
 * ```less
 *     & > .u {
 *       color: red;
 *     }
 * ```
 * ```less
 *     .v & {
 *       color: red;
 *     }
 * ```
 */
readonly p: string

/**
 * ```less
 *   &.q {
 *     color: red;
 *   }
 * ```
 */
readonly q: string

/**
 * ```less
 *     &.s {
 *       color: red;
 *     }
 * ```
 * ```less
 *     &:focus {
 *       color: red;
 *     }
 * ```
 * ```less
 *     & .t {
 *       color: red;
 *     }
 * ```
 * ```less
 *     & > .u {
 *       color: red;
 *     }
 * ```
 * ```less
 *     .v & {
 *       color: red;
 *     }
 * ```
 */
readonly r: string

/**
 * ```less
 *     &.s {
 *       color: red;
 *     }
 * ```
 */
readonly s: string

/**
 * ```less
 *     & .t {
 *       color: red;
 *     }
 * ```
 */
readonly t: string

/**
 * ```less
 *     & > .u {
 *       color: red;
 *     }
 * ```
 */
readonly u: string

/**
 * ```less
 *     .v & {
 *       color: red;
 *     }
 * ```
 */
readonly v: string

/**
 * ```less
 *   .o {
 *     color: red;
 *   }
 * ```
 */
readonly "var-n": string

/**
 * ```less
 *   .o {
 *     color: red;
 *   }
 * ```
 */
readonly o: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual   |      | Definition | References |
| -------- | --: | --------- | ---: | :--------: | :--------: |
| `a`      |   1 | `a`       |  459 |      ✓     |      ✓     |
| `b`      |   8 | `b`       |  547 |      ✓     |      ✓     |
| `c`      |  17 | `c`       |  635 |      ✓     |      ✓     |
| `&-d`    |  50 | `"b-d"`   |  724 |      ✓     |      ✓     |
| `e`      |  88 | `e`       |  819 |      ✓     |      ✓     |
| `f`      |  94 | `f`       |  910 |      ✓     |      ✓     |
| `g`      | 124 | `g`       |  994 |      ✓     |      ✓     |
| `h`      | 152 | `h`       | 1078 |      ✓     |      ✓     |
| `i`      | 190 | `i`       | 1168 |      ✓     |      ✓     |
| `j`      | 237 | `j`       | 1256 |      ✓     |      ✓     |
| `k`      | 273 | `k`       | 1338 |      ✓     |      ✓     |
| `m`      | 284 | `m`       | 1420 |      ✓     |      ✓     |
| `l`      | 277 | `l`       | 1502 |      ✓     |      ✓     |
| `p`      | 312 | `p`       | 1958 |      ✓     |      ✓     |
| `q`      | 353 | `q`       | 2041 |      ✓     |      ✓     |
| `r`      | 381 | `r`       | 2383 |      ✓     |      ✓     |
| `s`      | 391 | `s`       | 2472 |      ✓     |      ✓     |
| `t`      | 466 | `t`       | 2562 |      ✓     |      ✓     |
| `u`      | 504 | `u`       | 2654 |      ✓     |      ✓     |
| `v`      | 538 | `v`       | 2744 |      ✓     |      ✓     |
| `o`      | 673 | `"var-n"` | 2826 |      ✓     |      ✓     |
| `o`      | 673 | `o`       | 2914 |      ✓     |      ✓     |
