## Text

````ts
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
declare const id: string

export { id, }


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
declare const cls: string

export { cls, }


/**
 * ```css
 *   &.nested {
 *     background: green;
 *   }
 * ```
 */
declare const nested: string

export { nested, }


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
declare const $0: string

export { $0 as "hyphenated-class-name", }


/**
 * ```css
 * .🐈:after,
 * .🦉:after {
 *   content: 'emoji';
 * }
 * ```
 */
declare const $1: string

export { $1 as "🐈", }


/**
 * ```css
 * .🐈:after,
 * .🦉:after {
 *   content: 'emoji';
 * }
 * ```
 */
declare const $2: string

export { $2 as "🦉", }


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
| `id`                    |   1 | `id`                      |  948 |      ✓     |      ✓     |
| `cls`                   |  47 | `cls`                     | 1194 |      ✓     |      ✓     |
| `nested`                |  86 | `nested`                  | 1313 |      ✓     |      ✓     |
| `hyphenated-class-name` | 194 | `$0`                      | 1526 |      ✓     |      ✓     |
| `🐈`                    | 298 | `$1`                      | 1678 |      ✓     |      ✓     |
| `🦉`                    | 309 | `$2`                      | 1811 |      ✓     |      ✓     |
