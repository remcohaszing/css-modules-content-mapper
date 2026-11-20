## Text

````ts
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
declare const a: string

export { a as a, }


/**
 * ```sass
 *   .b
 *     color: green
 * ```
 */
declare const b: string

export { b as b, }


/**
 * ```sass
 *   &--c
 *     color: blue
 * ```
 */
declare const $0: string

export { $0 as "a--c", }


````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `a`      |  1 | `a`      | 150 |      ✓     |      ✓     |
| `b`      | 24 | `b`      | 224 |      ✓     |      ✓     |
| `&--c`   | 46 | `"a--c"` | 299 |      ✓     |      ✓     |
| `a`      |  1 | `a`      | 471 |      ✓     |      ✓     |
| `b`      | 24 | `b`      | 571 |      ✓     |      ✓     |
| `&--c`   | 46 | `$0`     | 672 |      ✓     |      ✓     |
