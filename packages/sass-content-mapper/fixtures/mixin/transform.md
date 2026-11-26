## Text

````ts
declare const styles: {
/**
 * ```scss
 * .local {
 *   @include mixins.red;
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
 * ```scss
 * .local {
 *   @include mixins.red;
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
| `local`  |  17 | `local`  | 102 |      ✓     |      ✓     |
| `parent` | 116 | `parent` | 134 |      ✓     |      ✓     |
| `local`  |  17 | `local`  | 290 |      ✓     |      ✓     |
| `parent` | 116 | `parent` | 347 |      ✓     |      ✓     |
