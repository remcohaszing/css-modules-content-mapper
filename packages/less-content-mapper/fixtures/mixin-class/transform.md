## Text

````cts
declare const styles: {
/**
 * ```less
 * .a {
 *   color: #ff0000;
 * }
 * ```
 */
readonly a: string

/**
 * ```less
 * .c {
 *   .a();
 *   .b();
 * }
 * ```
 */
readonly c: string

/**
 * ```less
 *   .child {
 *     color: blue;
 *   }
 * ```
 */
readonly parent: string

/**
 * ```less
 *   .child {
 *     color: blue;
 *   }
 * ```
 */
readonly child: string
}

export = styles

````

## Alias mappings

| Original |     | Virtual  |     | Definition | References |
| -------- | --: | -------- | --: | :--------: | :--------: |
| `a`      |  88 | `a`      |  93 |      ✓     |      ✓     |
| `c`      | 140 | `c`      | 174 |      ✓     |      ✓     |
| `parent` | 210 | `parent` | 261 |      ✓     |      ✓     |
| `child`  | 177 | `child`  | 353 |      ✓     |      ✓     |
