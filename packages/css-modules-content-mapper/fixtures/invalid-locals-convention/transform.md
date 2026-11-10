## Text

````mts
declare const styles: {
/**
 * ```css
 * .hyphenated-class {
 *   color: #ff0000;
 * }
 * ```
 */
readonly "hyphenated-class": string
}

export default styles

````

## Alias mappings

| Original           |    | Virtual              |     | Definition | References |
| ------------------ | -: | -------------------- | --: | :--------: | :--------: |
| `hyphenated-class` |  1 | `"hyphenated-class"` | 107 |      ✓     |      ✓     |

## Option diagnostics

- `localsConvention`: `Argument for 'localsConvention' option must be: 'camelCase', 'camelCaseOnly', 'dashes', 'dashesOnly', 'all', 'none'.`
