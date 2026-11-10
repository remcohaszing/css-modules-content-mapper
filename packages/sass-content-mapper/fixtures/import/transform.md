## Text

````cts
declare const styles: {
/**
 */
readonly index: string

/**
 * ```scss
 * .local {
 *   @include red;
 * }
 * ```
 */
readonly local: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `local`  | 135 | `local` | 127 |      ✓     |      ✓     |
