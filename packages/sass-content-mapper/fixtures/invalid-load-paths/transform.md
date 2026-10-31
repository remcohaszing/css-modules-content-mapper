## Text

````cts
declare const styles: {
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

| Original |    | Virtual |    | Definition |
| -------- | -: | ------- | -: | :--------: |
| `local`  | 60 | `local` | 97 |      ✓     |

## Option diagnostics

- `loadPaths`: `Content mapper option 'loadPaths' requires a value of type Array.`
