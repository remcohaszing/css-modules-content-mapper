## Text

````cts
declare const styles: {
/**
 * ```less
 *   .text-@{value} {
 *     color: @value;
 *   }
 * ```
 */
readonly "text-red": string

/**
 * ```less
 *   .text-@{value} {
 *     color: @value;
 *   }
 * ```
 */
readonly "text-green": string

/**
 * ```less
 *   .column-@{value} {
 *     height: (@value * 50px);
 *   }
 * ```
 */
readonly "column-1": string

/**
 * ```less
 *   .column-@{value} {
 *     height: (@value * 50px);
 *   }
 * ```
 */
readonly "column-2": string

/**
 * ```less
 * .a {
 *   each(.a(), .(@v, @k, @i) {
 *     @{k}-@{i}: @v;
 *   });
 * }
 * ```
 */
readonly a: string
}

export = styles

````

## Alias mappings

| Original          |     | Virtual        |     | Definition | References |
| ----------------- | --: | -------------- | --: | :--------: | :--------: |
| `text-@{value}`   |  41 | `"text-red"`   | 110 |      ✓     |      ✓     |
| `text-@{value}`   |  41 | `"text-green"` | 216 |      ✓     |      ✓     |
| `column-@{value}` | 105 | `"column-1"`   | 336 |      ✓     |      ✓     |
| `column-@{value}` | 105 | `"column-2"`   | 454 |      ✓     |      ✓     |
| `a`               | 199 | `a`            | 585 |      ✓     |      ✓     |
