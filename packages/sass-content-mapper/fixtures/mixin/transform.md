## Text

````mts
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
export declare const local: string

/**
 */
export declare const parent: string

/**
 */
export declare const child: string

````

## Alias mappings

| Original |     | Virtual  |     | Definition | References |
| -------- | --: | -------- | --: | :--------: | :--------: |
| `local`  |  17 | `local`  | 102 |      ✓     |      ✓     |
| `parent` | 116 | `parent` | 134 |      ✓     |      ✓     |
| `local`  |  17 | `local`  | 297 |      ✓     |      ✓     |
| `parent` | 116 | `parent` | 341 |      ✓     |      ✓     |
