## Text

````ts
declare const styles: {
/**
 * ```less
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
 * ```less
 *   &__element {
 *     color: green;
 *   }
 * ```
 */
readonly block__element: string

/**
 * ```less
 *   &--modifier {
 *     color: blue;
 *   }
 * ```
 */
readonly "block--modifier": string
}

export default styles

/**
 * ```less
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

export { block as block, }


/**
 * ```less
 *   &__element {
 *     color: green;
 *   }
 * ```
 */
declare const block__element: string

export { block__element as block__element, }


/**
 * ```less
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
| `&__element`  | 30 | `block__element`    | 758 |      ✓     |      ✓     |
| `&--modifier` | 68 | `$0`                | 915 |      ✓     |      ✓     |
