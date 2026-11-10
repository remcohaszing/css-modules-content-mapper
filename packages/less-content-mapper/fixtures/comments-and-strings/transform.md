## Text

````cts
declare const styles: {
/**
 * ```less
 * .icon::before {
 *   content: '.parent {';
 * }
 * ```
 */
readonly icon: string

/**
 * ```less
 * .parent {
 *   .child {
 *     content: '}';
 *   }
 * }
 * ```
 */
readonly parent: string

/**
 * ```less
 *   .child {
 *     content: '}';
 *   }
 * ```
 */
readonly child: string
}

export = styles

````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `icon`   | 17 | `icon`   | 110 |      ✓     |      ✓     |
| `parent` | 73 | `parent` | 219 |      ✓     |      ✓     |
| `child`  | 95 | `child`  | 312 |      ✓     |      ✓     |
