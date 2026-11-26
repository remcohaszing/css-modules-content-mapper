## Text

````ts
declare const styles: {
/**
 * ```less
 * .local {
 *   .red();
 * }
 * ```
 */
readonly local: string

/**
 */
readonly parent: string

/**
 */
readonly child: string
}

export default styles

/**
 * ```less
 * .local {
 *   .red();
 * }
 * ```
 */
declare const local: string

export { local, }


/**
 */
declare const parent: string

export { parent, }


/**
 */
declare const child: string

export { child, }


````

## Alias mappings

| Original |     | Virtual  |     | Definition | References |
| -------- | --: | -------- | --: | :--------: | :--------: |
| `local`  |  20 | `local`  |  89 |      ✓     |      ✓     |
| `parent` | 106 | `parent` | 121 |      ✓     |      ✓     |
| `local`  |  20 | `local`  | 264 |      ✓     |      ✓     |
| `parent` | 106 | `parent` | 321 |      ✓     |      ✓     |
