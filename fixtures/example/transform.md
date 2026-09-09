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

export = styles

````

## Mappings

- `id` → `id`
- `cls` → `cls`
- `nested` → `nested`
- `hyphenated-class-name` → `"hyphenated-class-name"`
- `🐈` → `"🐈"`
- `🦉` → `"🦉"`
