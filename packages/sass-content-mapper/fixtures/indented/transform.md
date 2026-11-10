## Text

````mts
declare const styles: {
/**
 * ```sass
 * .a
 *   color: #ff0000
 * 
 *   .b
 *     color: green
 * 
 *   &--c
 *     color: blue
 * ```
 */
readonly a: string

/**
 * ```sass
 *   .b
 *     color: green
 * ```
 */
readonly b: string

/**
 * ```sass
 *   &--c
 *     color: blue
 * ```
 */
readonly "a--c": string
}

export default styles

/**
 * ```sass
 * .a
 *   color: #ff0000
 * 
 *   .b
 *     color: green
 * 
 *   &--c
 *     color: blue
 * ```
 */
export declare const a: string

/**
 * ```sass
 *   .b
 *     color: green
 * ```
 */
export declare const b: string

````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `a`      |  1 | `a`      | 150 |      ✓     |      ✓     |
| `b`      | 24 | `b`      | 224 |      ✓     |      ✓     |
| `&--c`   | 46 | `"a--c"` | 299 |      ✓     |      ✓     |
| `a`      |  1 | `a`      | 478 |      ✓     |      ✓     |
| `b`      | 24 | `b`      | 564 |      ✓     |      ✓     |
