## Text

````ts
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

export default styles

/**
 * ```less
 * .a {
 *   width: answer();
 * }
 * ```
 */
declare const a: string

export { a, }


````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `a`      | 121 | `a`     |  94 |      ✓     |      ✓     |
| `a`      | 121 | `a`     | 205 |      ✓     |      ✓     |
