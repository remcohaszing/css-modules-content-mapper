## Text

````ts
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

export default styles

/**
 * ```less
 *   .text-@{value} {
 *     color: @value;
 *   }
 * ```
 */
declare const $0: string

export { $0 as "text-red", }


/**
 * ```less
 *   .text-@{value} {
 *     color: @value;
 *   }
 * ```
 */
declare const $1: string

export { $1 as "text-green", }


/**
 * ```less
 *   .column-@{value} {
 *     height: (@value * 50px);
 *   }
 * ```
 */
declare const $2: string

export { $2 as "column-1", }


/**
 * ```less
 *   .column-@{value} {
 *     height: (@value * 50px);
 *   }
 * ```
 */
declare const $3: string

export { $3 as "column-2", }


/**
 * ```less
 * .a {
 *   each(.a(), .(@v, @k, @i) {
 *     @{k}-@{i}: @v;
 *   });
 * }
 * ```
 */
declare const a: string

export { a, }


````

## Alias mappings

| Original          |     | Virtual        |      | Definition | References |
| ----------------- | --: | -------------- | ---: | :--------: | :--------: |
| `text-@{value}`   |  41 | `"text-red"`   |  110 |      ✓     |      ✓     |
| `text-@{value}`   |  41 | `"text-green"` |  216 |      ✓     |      ✓     |
| `column-@{value}` | 105 | `"column-1"`   |  336 |      ✓     |      ✓     |
| `column-@{value}` | 105 | `"column-2"`   |  454 |      ✓     |      ✓     |
| `a`               | 199 | `a`            |  585 |      ✓     |      ✓     |
| `text-@{value}`   |  41 | `$0`           |  712 |      ✓     |      ✓     |
| `text-@{value}`   |  41 | `$1`           |  846 |      ✓     |      ✓     |
| `column-@{value}` | 105 | `$2`           |  994 |      ✓     |      ✓     |
| `column-@{value}` | 105 | `$3`           | 1140 |      ✓     |      ✓     |
| `a`               | 199 | `a`            | 1299 |      ✓     |      ✓     |
