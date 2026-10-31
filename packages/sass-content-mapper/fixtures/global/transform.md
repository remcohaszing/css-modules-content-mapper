## Text

````cts
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

export = styles

````

## Alias mappings

| Original |     | Virtual |     | Definition |
| -------- | --: | ------- | --: | :--------: |
| `b`      |  17 | `b`     |  99 |      ✓     |
| `e`      | 103 | `e`     | 185 |      ✓     |
| `f`      | 111 | `f`     | 271 |      ✓     |
