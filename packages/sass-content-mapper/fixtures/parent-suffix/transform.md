## Text

````ts
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

export default styles

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
declare const block: string

export { block, }


/**
 * ```scss
 *   &__element {
 *     color: green;
 *   }
 * ```
 */
declare const block__element: string

export { block__element, }


/**
 * ```scss
 *   &--modifier {
 *     color: blue;
 *   }
 * ```
 */
declare const $0: string

export { $0 as "block--modifier", }


````

## Alias mappings

| Original      |    | Virtual             |     | Definition | References |
| ------------- | -: | ------------------- | --: | :--------: | :--------: |
| `block`       |  1 | `block`             | 197 |      ✓     |      ✓     |
| `&__element`  | 30 | `block__element`    | 293 |      ✓     |      ✓     |
| `&--modifier` | 68 | `"block--modifier"` | 398 |      ✓     |      ✓     |
| `block`       |  1 | `block`             | 628 |      ✓     |      ✓     |
| `&__element`  | 30 | `block__element`    | 749 |      ✓     |      ✓     |
| `&--modifier` | 68 | `$0`                | 888 |      ✓     |      ✓     |
