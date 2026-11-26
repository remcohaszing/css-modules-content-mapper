## Text

````ts
declare const styles: {
/**
 * ```less
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
 * ```less
 *   .b {
 *     color: green;
 *   }
 * ```
 */
readonly b: string
}

export default styles

/**
 * ```less
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
declare const a: string

export { a, }


/**
 * ```less
 *   .b {
 *     color: green;
 *   }
 * ```
 */
declare const b: string

export { b, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      |  1 | `a`     | 187 |      ✓     |      ✓     |
| `b`      | 27 | `b`     | 271 |      ✓     |      ✓     |
| `a`      |  1 | `a`     | 475 |      ✓     |      ✓     |
| `b`      | 27 | `b`     | 580 |      ✓     |      ✓     |
