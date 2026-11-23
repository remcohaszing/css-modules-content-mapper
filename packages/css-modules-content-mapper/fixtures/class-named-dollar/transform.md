## Text

````ts
declare const styles: {
/**
 * ```css
 * .a-b {
 *   color: #ff0000;
 * }
 * ```
 */
readonly "a-b": string

/**
 * ```css
 * .\$0 {
 *   color: #0000ff;
 * }
 * ```
 */
readonly $0: string
}

export default styles

/**
 * ```css
 * .a-b {
 *   color: #ff0000;
 * }
 * ```
 */
declare const $1: string

export { $1 as "a-b", }


/**
 * ```css
 * .\$0 {
 *   color: #0000ff;
 * }
 * ```
 */
declare const $0: string

export { $0 as $0, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `a-b`    |  1 | `"a-b"` |  94 |      ✓     |      ✓     |
| `\$`     | 29 | `$0`    | 179 |      ✓     |      ✓     |
| `a-b`    |  1 | `$1`    | 291 |      ✓     |      ✓     |
| `\$`     | 29 | `$0`    | 404 |      ✓     |      ✓     |
