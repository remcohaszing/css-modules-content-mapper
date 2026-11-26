## Text

````ts
declare const styles: {
/**
 * ```css
 * .warning {
 *   background: orange;
 * }
 * ```
 */
readonly warning: string
}

export default styles

/**
 * ```css
 * .warning {
 *   background: orange;
 * }
 * ```
 */
declare const warning: string

export { warning, }


````

## Alias mappings

| Original  |    | Virtual   |     | Definition | References |
| --------- | -: | --------- | --: | :--------: | :--------: |
| `warning` |  1 | `warning` | 102 |      ✓     |      ✓     |
| `warning` |  1 | `warning` | 227 |      ✓     |      ✓     |
