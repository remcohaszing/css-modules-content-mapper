## Text

````ts
declare const styles: {
/**
 * ```scss
 *   .child {
 *     color: red;
 *   }
 * ```
 */
readonly parent: string

/**
 * ```scss
 *   .child {
 *     color: red;
 *   }
 * ```
 */
readonly child: string
}

export default styles

/**
 * ```scss
 *   .child {
 *     color: red;
 *   }
 * ```
 */
declare const parent: string

export { parent, }


/**
 * ```scss
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
| `parent` | 32 | `parent` |  99 |      ✓     |      ✓     |
| `child`  | 44 | `child`  | 190 |      ✓     |      ✓     |
| `parent` | 32 | `parent` | 310 |      ✓     |      ✓     |
| `child`  | 44 | `child`  | 427 |      ✓     |      ✓     |
