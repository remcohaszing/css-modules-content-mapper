## Text

````cts
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

export = styles

````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `b`      |  17 | `b`     |  99 |      ✓     |      ✓     |
| `e`      | 103 | `e`     | 185 |      ✓     |      ✓     |
| `f`      | 111 | `f`     | 271 |      ✓     |      ✓     |
