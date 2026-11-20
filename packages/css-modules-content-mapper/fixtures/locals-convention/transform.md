## Text

````ts
declare const styles: {
/**
 * ```css
 * .hyphenated-class {
 *   color: #ff0000;
 * }
 * ```
 */
readonly "hyphenated-class": string

/**
 * ```css
 * .hyphenated-class {
 *   color: #ff0000;
 * }
 * ```
 */
readonly hyphenatedClass: string
}

export default styles

/**
 * ```css
 * .hyphenated-class {
 *   color: #ff0000;
 * }
 * ```
 */
declare const $0: string

export { $0 as "hyphenated-class", $0 as hyphenatedClass, }


````

## Alias mappings

| Original           |    | Virtual              |     | Definition | References |
| ------------------ | -: | -------------------- | --: | :--------: | :--------: |
| `hyphenated-class` |  1 | `"hyphenated-class"` | 107 |      ✓     |      ✓     |
| `hyphenated-class` |  1 | `hyphenatedClass`    | 218 |      ✓     |      ✓     |
| `hyphenated-class` |  1 | `$0`                 | 356 |      ✓     |      ✓     |
