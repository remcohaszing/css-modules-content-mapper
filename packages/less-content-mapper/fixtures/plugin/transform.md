## Text

````cts
declare const styles: {
/**
 * ```less
 * .a {
 *   width: answer();
 * }
 * ```
 */
readonly a: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual |    | Definition | References |
| -------- | --: | ------- | -: | :--------: | :--------: |
| `a`      | 121 | `a`     | 94 |      ✓     |      ✓     |
