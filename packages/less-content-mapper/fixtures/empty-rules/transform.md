## Text

````cts
declare const styles: {
/**
 * ```less
 *   &--c {
 *     color: #ff0000;
 *   }
 * ```
 */
readonly "b--c": string
}

export = styles

````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `&--c`   | 98 | `"b--c"` | 101 |      ✓     |      ✓     |
