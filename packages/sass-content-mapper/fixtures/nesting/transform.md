## Text

````cts
declare const styles: {
/**
 * ```scss
 * .a {
 *   color: #ff0000;
 * 
 *   .b {
 *     color: green;
 *   }
 * 
 *   @media print {
 *     color: black;
 *   }
 * }
 * ```
 */
readonly a: string

/**
 * ```scss
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
| `a`      |  1 | `a`     | 187 |      ✓     |
| `b`      | 27 | `b`     | 271 |      ✓     |
