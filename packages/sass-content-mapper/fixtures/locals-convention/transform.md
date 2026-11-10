## Text

````mts
declare const styles: {
/**
 * ```scss
 *   &--modifier {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly "hyphenated-class--modifier": string

/**
 * ```scss
 *   &--modifier {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly hyphenatedClassModifier: string
}

export default styles

/**
 * ```scss
 *   &--modifier {
 *     color: #ff0000;
 *   }
 * ```
 */
export declare const hyphenatedClassModifier: string

````

## Alias mappings

| Original      |    | Virtual                        |     | Definition | References |
| ------------- | -: | ------------------------------ | --: | :--------: | :--------: |
| `&--modifier` | 22 | `"hyphenated-class--modifier"` | 108 |      ✓     |      ✓     |
| `&--modifier` | 22 | `hyphenatedClassModifier`      | 230 |      ✓     |      ✓     |
| `&--modifier` | 22 | `hyphenatedClassModifier`      | 384 |      ✓     |      ✓     |
