## Text

````cts
declare const styles: {
/**
 */
readonly partial: string

/**
 * ```scss
 * .local {
 *   color: partial.$red;
 * }
 * ```
 */
readonly local: string
}

export = styles

````

## Alias mappings

| Original |    | Virtual |     | Definition |
| -------- | -: | ------- | --: | :--------: |
| `local`  | 84 | `local` | 136 |      ✓     |
