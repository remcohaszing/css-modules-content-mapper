## Text

````ts
declare const styles: {
/**
 * ```css
 * .
 * ```
 */
readonly red: string
}

export default styles

/**
 * ```css
 * .
 * ```
 */
declare const red: string

export { red, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `red`    |  1 | `red`   |  63 |      ✓     |      ✓     |
| `red`    |  1 | `red`   | 145 |      ✓     |      ✓     |
