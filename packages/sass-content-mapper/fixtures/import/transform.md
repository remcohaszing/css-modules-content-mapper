## Text

````ts
declare const styles: {
/**
 */
readonly index: string

/**
 * ```scss
 * .local {
 *   @include red;
 * }
 * ```
 */
readonly local: string
}

export default styles

/**
 */
declare const index: string

export { index as index, }


/**
 * ```scss
 * .local {
 *   @include red;
 * }
 * ```
 */
declare const local: string

export { local as local, }


````

## Alias mappings

| Original |     | Virtual |     | Definition | References |
| -------- | --: | ------- | --: | :--------: | :--------: |
| `local`  | 135 | `local` | 127 |      ✓     |      ✓     |
| `local`  | 135 | `local` | 309 |      ✓     |      ✓     |
