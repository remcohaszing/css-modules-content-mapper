## Text

````mts
declare const styles: {
/**
 * ```css
 * #id {
 *   font-weight: bold;
 * }
 * ```
 */
readonly id: string

/**
 * 
 * asd
 * ```css
 * .cls {
 *   color: #ff0000;
 * 
 *   &.nested {
 *     background: green;
 *   }
 * }
 * ```
 *
 * second comment!
 * ```css
 * .cls {
 *   background: green;
 * }
 * ```
 */
readonly cls: string

/**
 * ```css
 *   &.nested {
 *     background: green;
 *   }
 * ```
 */
readonly nested: string

/**
 * ```css
 * .hyphenated-class-name {
 *   border: 1px solid blue;
 * }
 * ```
 * ```css
 * .hyphenated-class-name {
 *   background: yellow;
 * }
 * ```
 */
readonly "hyphenated-class-name": string

/**
 * ```css
 * .🐈:after,
 * .🦉:after {
 *   content: 'emoji';
 * }
 * ```
 */
readonly "🐈": string

/**
 * ```css
 * .🐈:after,
 * .🦉:after {
 *   content: 'emoji';
 * }
 * ```
 */
readonly "🦉": string
}

export default styles

/**
 * ```css
 * #id {
 *   font-weight: bold;
 * }
 * ```
 */
export declare const id: string

/**
 * 
 * asd
 * ```css
 * .cls {
 *   color: #ff0000;
 * 
 *   &.nested {
 *     background: green;
 *   }
 * }
 * ```
 *
 * second comment!
 * ```css
 * .cls {
 *   background: green;
 * }
 * ```
 */
export declare const cls: string

/**
 * ```css
 *   &.nested {
 *     background: green;
 *   }
 * ```
 */
export declare const nested: string

````

## Alias mappings

| Original                |     | Virtual                   |      | Definition | References |
| ----------------------- | --: | ------------------------- | ---: | :--------: | :--------: |
| `id`                    |   1 | `id`                      |   96 |      ✓     |      ✓     |
| `cls`                   |  47 | `cls`                     |  320 |      ✓     |      ✓     |
| `nested`                |  86 | `nested`                  |  416 |      ✓     |      ✓     |
| `hyphenated-class-name` | 194 | `"hyphenated-class-name"` |  603 |      ✓     |      ✓     |
| `🐈`                    | 298 | `"🐈"`                    |  727 |      ✓     |      ✓     |
| `🦉`                    | 309 | `"🦉"`                    |  832 |      ✓     |      ✓     |
| `id`                    |   1 | `id`                      |  955 |      ✓     |      ✓     |
| `cls`                   |  47 | `cls`                     | 1191 |      ✓     |      ✓     |
| `nested`                |  86 | `nested`                  | 1299 |      ✓     |      ✓     |
