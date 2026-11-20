## Text

````ts
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
declare const icon: string

export { icon as icon, }


/**
 * ```sass
 *   .child
 *     color: red
 * ```
 */
declare const parent: string

export { parent as parent, }


/**
 * ```sass
 *   .child
 *     color: red
 * ```
 */
declare const child: string

export { child as child, }


````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `icon`   |  1 | `icon`   | 103 |      ✓     |      ✓     |
| `parent` | 40 | `parent` | 182 |      ✓     |      ✓     |
| `child`  | 50 | `child`  | 263 |      ✓     |      ✓     |
| `icon`   |  1 | `icon`   | 387 |      ✓     |      ✓     |
| `parent` | 40 | `parent` | 498 |      ✓     |      ✓     |
| `child`  | 50 | `child`  | 615 |      ✓     |      ✓     |
