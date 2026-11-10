## Text

````cts
declare const styles: {
/**
 * ```less
 * .local {
 *   .red();
 * }
 * ```
 */
readonly local: string

/**
 */
readonly parent: string

/**
 */
readonly child: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual  |     | Definition | References |
| -------- | --: | -------- | --: | :--------: | :--------: |
| `local`  |  20 | `local`  |  89 |      ✓     |      ✓     |
| `parent` | 106 | `parent` | 121 |      ✓     |      ✓     |
