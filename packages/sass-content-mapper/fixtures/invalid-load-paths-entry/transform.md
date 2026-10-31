## Text

````cts
declare const styles: {
/**
 */
readonly library: string

/**
 * ```scss
 * .local {
 *   color: #ff0000;
 * }
 * ```
 */
readonly local: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual |     | Definition |
| -------- | --: | ------- | --: | :--------: |
| `local`  | 112 | `local` | 131 |      ✓     |

## Option diagnostics

- `loadPaths[1]`: `Content mapper option 'loadPaths' requires a value of type string.`
