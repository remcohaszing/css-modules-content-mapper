## Text

````cts
declare const styles: {
/**
 * ```less
 *   .child {
 *     color: red;
 *   }
 * ```
 */
readonly parent: string

/**
 * ```less
 *   .child {
 *     color: red;
 *   }
 * ```
 */
readonly child: string
}

export = styles

````

## Alias mappings

| Original |    | Virtual  |     | Definition |
| -------- | -: | -------- | --: | :--------: |
| `parent` | 32 | `parent` |  99 |      ✓     |
| `child`  | 44 | `child`  | 190 |      ✓     |
