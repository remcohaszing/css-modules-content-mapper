## Text

````ts
declare const styles: {
/**
 * ```scss
 *   .b {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly b: string

/**
 * ```scss
 *   .f {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly e: string

/**
 * ```scss
 *   .f {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly f: string
}

export default styles

/**
 * ```scss
 *   .b {
 *     color: #ff0000;
 *   }
 * ```
 */
declare const b: string

export { b as b, }


/**
 * ```scss
 *   .f {
 *     color: #ff0000;
 *   }
 * ```
 */
declare const e: string

export { e as e, }


/**
 * ```scss
 *   .f {
 *     color: #ff0000;
 *   }
 * ```
 */
declare const f: string

export { f as f, }


````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `b`      |  17 | `b`     |  99 |      ✓     |      ✓     |
| `e`      | 103 | `e`     | 185 |      ✓     |      ✓     |
| `f`      | 111 | `f`     | 271 |      ✓     |      ✓     |
| `b`      |  17 | `b`     | 387 |      ✓     |      ✓     |
| `e`      | 103 | `e`     | 499 |      ✓     |      ✓     |
| `f`      | 111 | `f`     | 611 |      ✓     |      ✓     |
