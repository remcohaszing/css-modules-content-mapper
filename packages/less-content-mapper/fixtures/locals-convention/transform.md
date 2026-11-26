## Text

````ts
declare const styles: {
/**
 * ```less
 *   &--modifier {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly "hyphenated-class--modifier": string

/**
 * ```less
 *   &--modifier {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly hyphenatedClassModifier: string
}

export default styles

/**
 * ```less
 *   &--modifier {
 *     color: #ff0000;
 *   }
 * ```
 */
declare const $0: string

export { $0 as "hyphenated-class--modifier", $0 as hyphenatedClassModifier, }


````

## Alias mappings

| Original      |    | Virtual                        |     | Definition | References |
| ------------- | -: | ------------------------------ | --: | :--------: | :--------: |
| `&--modifier` | 22 | `"hyphenated-class--modifier"` | 108 |      ✓     |      ✓     |
| `&--modifier` | 22 | `hyphenatedClassModifier`      | 230 |      ✓     |      ✓     |
| `&--modifier` | 22 | `$0`                           | 377 |      ✓     |      ✓     |
