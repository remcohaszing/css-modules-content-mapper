## Text

````ts
declare const styles: {
/**
 * ```css
 * .foo-bar {
 *   color: #ff0000;
 * }
 * ```
 */
readonly "foo-bar": string

/**
 * ```css
 * .foo-bar {
 *   color: #ff0000;
 * }
 * ```
 */
readonly fooBar: string

/**
 * ```css
 * .fooBar {
 *   color: #0000ff;
 * }
 * ```
 */
readonly fooBar: string
}

export default styles

/**
 * ```css
 * .foo-bar {
 *   color: #ff0000;
 * }
 * ```
 */
declare const $0: string

export { $0 as "foo-bar", $0 as fooBar, }


/**
 * ```css
 * .fooBar {
 *   color: #0000ff;
 * }
 * ```
 */
declare const fooBar: string

export { }


````

## Alias mappings

| Original  |    | Virtual     |     | Definition | References |
| --------- | -: | ----------- | --: | :--------: | :--------: |
| `foo-bar` |  1 | `"foo-bar"` |  98 |      ✓     |      ✓     |
| `foo-bar` |  1 | `fooBar`    | 191 |      ✓     |      ✓     |
| `fooBar`  | 33 | `fooBar`    | 280 |      ✓     |      ✓     |
| `foo-bar` |  1 | `$0`        | 400 |      ✓     |      ✓     |
| `fooBar`  | 33 | `fooBar`    | 534 |      ✓     |      ✓     |
