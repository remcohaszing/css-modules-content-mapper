## Text

````mts
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
export declare const parent: string

/**
 * ```scss
 *   .child {
 *     color: red;
 *   }
 * ```
 */
export declare const child: string

````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `parent` | 32 | `parent` |  99 |      ✓     |      ✓     |
| `child`  | 44 | `child`  | 190 |      ✓     |      ✓     |
| `parent` | 32 | `parent` | 317 |      ✓     |      ✓     |
| `child`  | 44 | `child`  | 420 |      ✓     |      ✓     |
