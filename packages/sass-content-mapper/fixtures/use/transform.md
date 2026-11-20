## Text

````ts
declare const styles: {
/**
 */
readonly partial: string

/**
 * ```scss
 * .local {
 *   color: partial.$red;
 * }
 * ```
 */
readonly local: string
}

export default styles

/**
 */
declare const partial: string

export { partial as partial, }


/**
 * ```scss
 * .local {
 *   color: partial.$red;
 * }
 * ```
 */
declare const local: string

export { local as local, }


````

## Alias mappings

| Original |    | Virtual |     | Definition | References |
| -------- | -: | ------- | --: | :--------: | :--------: |
| `local`  | 84 | `local` | 136 |      ✓     |      ✓     |
| `local`  | 84 | `local` | 331 |      ✓     |      ✓     |
