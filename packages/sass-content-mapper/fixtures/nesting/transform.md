## Text

````mts
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

export default styles

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
export declare const a: string

/**
 * ```scss
 *   .b {
 *     color: green;
 *   }
 * ```
 */
export declare const b: string

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a`      |  1 | `a`     | 187 |      ✓     |      ✓     |
| `b`      | 27 | `b`     | 271 |      ✓     |      ✓     |
| `a`      |  1 | `a`     | 482 |      ✓     |      ✓     |
| `b`      | 27 | `b`     | 578 |      ✓     |      ✓     |
