## Text

````mts
declare const styles: {
/**
 * ```scss
 *   .text-#{$color} {
 *     color: $color;
 *   }
 * ```
 */
readonly "text-red": string

/**
 * ```scss
 *   .text-#{$color} {
 *     color: $color;
 *   }
 * ```
 */
readonly "text-green": string
}

export default styles

````

## Alias mappings

| Original         |    | Virtual        |     | Definition | References |
| ---------------- | -: | -------------- | --: | :--------: | :--------: |
| `text-#{$color}` | 32 | `"text-red"`   | 111 |      ✓     |      ✓     |
| `text-#{$color}` | 32 | `"text-green"` | 218 |      ✓     |      ✓     |
