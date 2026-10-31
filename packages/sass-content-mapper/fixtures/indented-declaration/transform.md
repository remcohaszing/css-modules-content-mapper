## Text

````cts
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

export = styles

````

## Alias mappings

| Original |    | Virtual  |     | Definition |
| -------- | -: | -------- | --: | :--------: |
| `icon`   |  1 | `icon`   | 103 |      ✓     |
| `parent` | 40 | `parent` | 182 |      ✓     |
| `child`  | 50 | `child`  | 263 |      ✓     |
