## Text

````ts
declare const styles: {
/**
 * ```less
 *   .b {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly b: string

/**
 * ```less
 *   .f {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly e: string

/**
 * ```less
 *   .f {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly f: string
}

export default styles

/**
 * ```less
 *   .b {
 *     color: #ff0000;
 *   }
 * ```
 */
declare const b: string

export { b as b, }


/**
 * ```less
 *   .f {
 *     color: #ff0000;
 *   }
 * ```
 */
declare const e: string

export { e as e, }


/**
 * ```less
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
