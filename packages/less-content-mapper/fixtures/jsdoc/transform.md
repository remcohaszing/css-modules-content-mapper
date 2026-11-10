## Text

````cts
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

export = styles

````

## Alias mappings

| Original |    | Virtual |     | Definition |
| -------- | -: | ------- | --: | :--------: |
| `a`      | 29 | `a`     | 154 |      ✓     |
| `b`      | 76 | `b`     | 253 |      ✓     |
