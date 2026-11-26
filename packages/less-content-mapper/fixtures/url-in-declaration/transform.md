## Text

````ts
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

export default styles

/**
 * ```less
 * .icon {
 *   background: url(icons.parent);
 * }
 * ```
 */
declare const icon: string

export { icon, }


/**
 * ```less
 *   .child {
 *     color: red;
 *   }
 * ```
 */
declare const parent: string

export { parent, }


/**
 * ```less
 *   .child {
 *     color: red;
 *   }
 * ```
 */
declare const child: string

export { child, }


````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `icon`   |  1 | `icon`   | 111 |      ✓     |      ✓     |
| `parent` | 45 | `parent` | 200 |      ✓     |      ✓     |
| `child`  | 57 | `child`  | 291 |      ✓     |      ✓     |
| `icon`   |  1 | `icon`   | 423 |      ✓     |      ✓     |
| `parent` | 45 | `parent` | 536 |      ✓     |      ✓     |
| `child`  | 57 | `child`  | 653 |      ✓     |      ✓     |
