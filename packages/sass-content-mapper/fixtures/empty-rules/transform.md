## Text

````mts
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

export default styles

````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `&--c`   | 98 | `"b--c"` | 101 |      ✓     |      ✓     |
