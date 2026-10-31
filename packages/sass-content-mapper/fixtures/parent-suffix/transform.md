## Text

````cts
declare const styles: {
/**
 * ```scss
 * .block {
 *   color: #ff0000;
 * 
 *   &__element {
 *     color: green;
 *   }
 * 
 *   &--modifier {
 *     color: blue;
 *   }
 * }
 * ```
 */
readonly block: string

/**
 * ```scss
 *   &__element {
 *     color: green;
 *   }
 * ```
 */
readonly block__element: string

/**
 * ```scss
 *   &--modifier {
 *     color: blue;
 *   }
 * ```
 */
readonly "block--modifier": string
}

export = styles

````

## Alias mappings

| Original      |    | Virtual             |     | Definition |
| ------------- | -: | ------------------- | --: | :--------: |
| `block`       |  1 | `block`             | 197 |      ✓     |
| `&__element`  | 30 | `block__element`    | 293 |      ✓     |
| `&--modifier` | 68 | `"block--modifier"` | 398 |      ✓     |
