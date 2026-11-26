## Text

````ts
declare const styles: {
/**
 * ```less
 * .text-@{color} {
 *   color: @color;
 * }
 * ```
 */
readonly "text-red": string

/**
 * ```less
 * .@{color}-text {
 *   color: @color;
 * }
 * ```
 */
readonly "red-text": string

/**
 * ```less
 * @{selector} {
 *   color: red;
 * }
 * ```
 */
readonly a: string
}

export default styles

/**
 * ```less
 * .text-@{color} {
 *   color: @color;
 * }
 * ```
 */
declare const $0: string

export { $0 as "text-red", }


/**
 * ```less
 * .@{color}-text {
 *   color: @color;
 * }
 * ```
 */
declare const $1: string

export { $1 as "red-text", }


/**
 * ```less
 * @{selector} {
 *   color: red;
 * }
 * ```
 */
declare const a: string

export { a, }


````

## Alias mappings

| Original        |     | Virtual      |     | Definition | References |
| --------------- | --: | ------------ | --: | :--------: | :--------: |
| `text-@{color}` |  15 | `"text-red"` | 104 |      ✓     |      ✓     |
| `@{color}-text` |  52 | `"red-text"` | 204 |      ✓     |      ✓     |
| `@{selector}`   | 107 | `a`          | 298 |      ✓     |      ✓     |
| `text-@{color}` |  15 | `$0`         | 419 |      ✓     |      ✓     |
| `@{color}-text` |  52 | `$1`         | 547 |      ✓     |      ✓     |
| `@{selector}`   | 107 | `a`          | 669 |      ✓     |      ✓     |
