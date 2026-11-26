## Text

````ts
declare const styles: {
/**
 * ```scss
 * .red {
 *   color: #ff0000;
 * }
 * ```
 */
readonly red: string
}

export default styles

/**
 * ```scss
 * .red {
 *   color: #ff0000;
 * }
 * ```
 */
declare const red: string

export { red, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `red`    | 57 | `red`   |  95 |      ✓     |      ✓     |
| `red`    | 57 | `red`   | 209 |      ✓     |      ✓     |
