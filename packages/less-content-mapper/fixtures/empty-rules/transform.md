## Text

````ts
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

export default styles

/**
 * ```less
 *   &--c {
 *     color: #ff0000;
 *   }
 * ```
 */
declare const $0: string

export { $0 as "b--c", }


````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `&--c`   | 98 | `"b--c"` | 101 |      ✓     |      ✓     |
| `&--c`   | 98 | `$0`     | 224 |      ✓     |      ✓     |
