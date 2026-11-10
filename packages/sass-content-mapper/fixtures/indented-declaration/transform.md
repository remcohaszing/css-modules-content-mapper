## Text

````mts
declare const styles: {
/**
 * ```sass
 * .icon
 *   background: url(icons.parent)
 * ```
 */
readonly icon: string

/**
 * ```sass
 *   .child
 *     color: red
 * ```
 */
readonly parent: string

/**
 * ```sass
 *   .child
 *     color: red
 * ```
 */
readonly child: string
}

export default styles

/**
 * ```sass
 * .icon
 *   background: url(icons.parent)
 * ```
 */
export declare const icon: string

/**
 * ```sass
 *   .child
 *     color: red
 * ```
 */
export declare const parent: string

/**
 * ```sass
 *   .child
 *     color: red
 * ```
 */
export declare const child: string

````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `icon`   |  1 | `icon`   | 103 |      ✓     |      ✓     |
| `parent` | 40 | `parent` | 182 |      ✓     |      ✓     |
| `child`  | 50 | `child`  | 263 |      ✓     |      ✓     |
| `icon`   |  1 | `icon`   | 394 |      ✓     |      ✓     |
| `parent` | 40 | `parent` | 485 |      ✓     |      ✓     |
| `child`  | 50 | `child`  | 578 |      ✓     |      ✓     |
