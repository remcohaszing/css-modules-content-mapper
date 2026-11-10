## Text

````mts
declare const styles: {
/**
 * ```css
 * .cls {
 *   color: red;
 * }
 * ```
 */
readonly cls: string
}

export default styles

/**
 * ```css
 * .cls {
 *   color: red;
 * }
 * ```
 */
export declare const cls: string

````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `cls`    |  1 | `cls`   |  90 |      ✓     |      ✓     |
| `cls`    |  1 | `cls`   | 206 |      ✓     |      ✓     |

## Option diagnostics

- `defaultExport`: `Argument for 'defaultExport' option must be a boolean.`
