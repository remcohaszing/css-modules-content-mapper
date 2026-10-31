## Text

````cts
declare const styles: {
/**
 * ```scss
 * .local {
 *   @include mixins.red;
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

| Original |     | Virtual  |     | Definition |
| -------- | --: | -------- | --: | :--------: |
| `local`  |  17 | `local`  | 102 |      ✓     |
| `parent` | 116 | `parent` | 134 |      ✓     |
