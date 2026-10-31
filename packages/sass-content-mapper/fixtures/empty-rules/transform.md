## Text

````cts
declare const styles: {
/**
 * ```scss
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

| Original |    | Virtual  |     | Definition |
| -------- | -: | -------- | --: | :--------: |
| `&--c`   | 98 | `"b--c"` | 101 |      ✓     |
