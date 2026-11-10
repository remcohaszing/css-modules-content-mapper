## Text

````cts
declare const styles: {
/**
 * ```less
 * .icon {
 *   background: url(icons.parent);
 * }
 * ```
 */
readonly icon: string

/**
 * ```less
 *   .child {
 *     color: red;
 *   }
 * ```
 */
readonly parent: string

/**
 * ```less
 *   .child {
 *     color: red;
 *   }
 * ```
 */
readonly child: string
}

export = styles

````

## Alias mappings

| Original |    | Virtual  |     | Definition |
| -------- | -: | -------- | --: | :--------: |
| `icon`   |  1 | `icon`   | 111 |      ✓     |
| `parent` | 45 | `parent` | 200 |      ✓     |
| `child`  | 57 | `child`  | 291 |      ✓     |
