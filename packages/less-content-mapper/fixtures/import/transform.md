## Text

````ts
declare const styles: {
/**
 */
readonly index: string

/**
 * ```less
 * .local {
 *   .red();
 * }
 * ```
 */
readonly local: string
}

export default styles

/**
 */
declare const index: string

export { index, }


/**
 * ```less
 * .local {
 *   .red();
 * }
 * ```
 */
declare const local: string

export { local, }


````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `local`  | 188 | `local` | 121 |      ✓     |      ✓     |
| `local`  | 188 | `local` | 288 |      ✓     |      ✓     |
