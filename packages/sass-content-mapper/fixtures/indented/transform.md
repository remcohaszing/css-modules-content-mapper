## Text

````cts
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

export = styles

````

## Alias mappings

| Original |    | Virtual  |     | Definition |
| -------- | -: | -------- | --: | :--------: |
| `a`      |  1 | `a`      | 150 |      ✓     |
| `b`      | 24 | `b`      | 224 |      ✓     |
| `&--c`   | 46 | `"a--c"` | 299 |      ✓     |
