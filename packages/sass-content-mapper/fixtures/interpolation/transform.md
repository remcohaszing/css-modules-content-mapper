## Text

````cts
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

export = styles

````

## Alias mappings

| Original         |    | Virtual        |     | Definition |
| ---------------- | -: | -------------- | --: | :--------: |
| `text-#{$color}` | 32 | `"text-red"`   | 111 |      ✓     |
| `text-#{$color}` | 32 | `"text-green"` | 218 |      ✓     |
