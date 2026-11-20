## Text

````ts
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

export default styles

/**
 * ```less
 * .a {
 *   color: #ff0000;
 * }
 * ```
 */
declare const a: string

export { a as a, }


/**
 * ```less
 * .c {
 *   .a();
 *   .b();
 * }
 * ```
 */
declare const c: string

export { c as c, }


/**
 * ```less
 *   .child {
 *     color: blue;
 *   }
 * ```
 */
declare const parent: string

export { parent as parent, }


/**
 * ```less
 *   .child {
 *     color: blue;
 *   }
 * ```
 */
declare const child: string

export { child as child, }


````

## Alias mappings

| Original |     | Virtual  |     | Definition | References |
| -------- | --: | -------- | --: | :--------: | :--------: |
| `a`      |  88 | `a`      |  93 |      ✓     |      ✓     |
| `c`      | 140 | `c`      | 174 |      ✓     |      ✓     |
| `parent` | 210 | `parent` | 261 |      ✓     |      ✓     |
| `child`  | 177 | `child`  | 353 |      ✓     |      ✓     |
| `a`      |  88 | `a`      | 467 |      ✓     |      ✓     |
| `c`      | 140 | `c`      | 574 |      ✓     |      ✓     |
| `parent` | 210 | `parent` | 687 |      ✓     |      ✓     |
| `child`  | 177 | `child`  | 815 |      ✓     |      ✓     |
