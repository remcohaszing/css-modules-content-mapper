## Text

````ts
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

export default styles

/**
 * ```less
 * .icon::before {
 *   content: '.parent {';
 * }
 * ```
 */
declare const icon: string

export { icon, }


/**
 * ```less
 * .parent {
 *   .child {
 *     content: '}';
 *   }
 * }
 * ```
 */
declare const parent: string

export { parent, }


/**
 * ```less
 *   .child {
 *     content: '}';
 *   }
 * ```
 */
declare const child: string

export { child, }


````

## Alias mappings

| Original |    | Virtual  |     | Definition | References |
| -------- | -: | -------- | --: | :--------: | :--------: |
| `icon`   | 17 | `icon`   | 110 |      ✓     |      ✓     |
| `parent` | 73 | `parent` | 219 |      ✓     |      ✓     |
| `child`  | 95 | `child`  | 312 |      ✓     |      ✓     |
| `icon`   | 17 | `icon`   | 443 |      ✓     |      ✓     |
| `parent` | 73 | `parent` | 576 |      ✓     |      ✓     |
| `child`  | 95 | `child`  | 695 |      ✓     |      ✓     |
