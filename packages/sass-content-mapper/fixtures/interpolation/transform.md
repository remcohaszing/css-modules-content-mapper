## Text

````ts
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

/**
 * ```scss
 *   .text-#{$color} {
 *     color: $color;
 *   }
 * ```
 */
declare const $0: string

export { $0 as "text-red", }


/**
 * ```scss
 *   .text-#{$color} {
 *     color: $color;
 *   }
 * ```
 */
declare const $1: string

export { $1 as "text-green", }


````

## Alias mappings

| Original         |    | Virtual        |     | Definition | References |
| ---------------- | -: | -------------- | --: | :--------: | :--------: |
| `text-#{$color}` | 32 | `"text-red"`   | 111 |      ✓     |      ✓     |
| `text-#{$color}` | 32 | `"text-green"` | 218 |      ✓     |      ✓     |
| `text-#{$color}` | 32 | `$0`           | 357 |      ✓     |      ✓     |
| `text-#{$color}` | 32 | `$1`           | 492 |      ✓     |      ✓     |
