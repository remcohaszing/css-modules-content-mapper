## Text

````ts
declare const styles: {
/**
 * ```css
 * .red {
 *   color: #ff0000;
 * }
 * ```
 */
readonly red: string
}

export default styles

/**
 * ```css
 * .red {
 *   color: #ff0000;
 * }
 * ```
 */
declare const red: string

export { red as red, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `red`    |  1 | `red`   |  94 |      ✓     |      ✓     |
| `red`    |  1 | `red`   | 207 |      ✓     |      ✓     |
