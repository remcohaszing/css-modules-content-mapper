## Text

````ts
declare const styles: {
/**
 */
readonly library: string

/**
 * ```scss
 * .local {
 *   color: #ff0000;
 * }
 * ```
 */
readonly local: string
}

export default styles

/**
 */
declare const library: string

export { library as library, }


/**
 * ```scss
 * .local {
 *   color: #ff0000;
 * }
 * ```
 */
declare const local: string

export { local as local, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `local`  | 72 | `local` | 131 |      ✓     |      ✓     |
| `local`  | 72 | `local` | 321 |      ✓     |      ✓     |
