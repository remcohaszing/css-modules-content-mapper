## Text

````cts
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

export = styles

````

## Alias mappings

| Original      |    | Virtual                        |     | Definition |
| ------------- | -: | ------------------------------ | --: | :--------: |
| `&--modifier` | 22 | `"hyphenated-class--modifier"` | 108 |      ✓     |
| `&--modifier` | 22 | `hyphenatedClassModifier`      | 230 |      ✓     |
