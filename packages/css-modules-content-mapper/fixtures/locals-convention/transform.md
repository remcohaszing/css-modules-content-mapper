## Text

````cts
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

export = styles

````

## Alias mappings

| Original           |    | Virtual              |     | Definition | References |
| ------------------ | -: | -------------------- | --: | :--------: | :--------: |
| `hyphenated-class` |  1 | `"hyphenated-class"` | 107 |      ✓     |      ✓     |
| `hyphenated-class` |  1 | `hyphenatedClass`    | 218 |      ✓     |      ✓     |
