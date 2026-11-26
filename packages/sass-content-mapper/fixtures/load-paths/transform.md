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

export { library, }


/**
 * ```scss
 * .local {
 *   color: #ff0000;
 * }
 * ```
 */
declare const local: string

export { local, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `local`  | 72 | `local` | 131 |      ✓     |      ✓     |
| `local`  | 72 | `local` | 310 |      ✓     |      ✓     |
