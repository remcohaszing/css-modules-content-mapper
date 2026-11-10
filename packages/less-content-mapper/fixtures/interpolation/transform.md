## Text

````cts
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

export = styles

````

## Alias mappings

| Original        |     | Virtual      |     | Definition | References |
| --------------- | --: | ------------ | --: | :--------: | :--------: |
| `text-@{color}` |  15 | `"text-red"` | 104 |      ✓     |      ✓     |
| `@{color}-text` |  52 | `"red-text"` | 204 |      ✓     |      ✓     |
| `@{selector}`   | 107 | `a`          | 298 |      ✓     |      ✓     |
