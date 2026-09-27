# Gully Globe Typography

## Font Families

Gully Globe uses two families across the Shopify theme.

### Staatliches

Use `Staatliches` for display typography only:

- Hero headings
- Section headings
- Editorial promo headings
- Large campaign or menu feature titles

Rules:

- Weight: `400` only
- Do not bold Staatliches
- Letter spacing: `0.02em`
- Text transform: uppercase for major headings and promo titles

Scale:

| Use | Desktop | Mobile | Weight | Line height |
| --- | ---: | ---: | ---: | ---: |
| Hero heading | 76-88px | 44-46px | 400 | 0.9-1 |
| Section heading | 46-48px | 30px | 400 | 1 |
| Promo title | 30-38px | 24-28px | 400 | 0.95-1.05 |
| Card title | 19-30px | 18-24px | 400 | 1.05-1.2 |

### Satoshi

Use `Satoshi` for everything else:

- Body text
- Navigation
- Buttons
- Product names
- Prices
- Labels
- Forms
- Helper text
- Badges
- Footer links

Weights:

- `400 Regular`: body text, descriptions, reviews, helper text
- `500 Medium`: meta text, chips, filters, inputs, breadcrumbs, footer links
- `700 Bold`: navigation, buttons, product names, prices, labels, badges

Scale:

| Use | Size | Weight | Line height | Letter spacing |
| --- | ---: | ---: | ---: | ---: |
| Body | 13-18px | 400 | 1.5-1.7 | 0 |
| Helper text | 12-14px | 400 | 1.4-1.6 | 0 |
| Meta/chips/inputs | 12-15px | 500 | 1.3-1.5 | 0 |
| Product names/prices | 16-24px | 700 | 1.1-1.3 | 0 |
| Buttons/nav | 12-13px | 700 | 1 | 0.14em |
| Eyebrows | 10.5-11.5px | 700 | 1 | 0.16-0.2em |

Phone input text must stay at `16px` minimum to prevent iOS zoom.

## Color Usage

- Headings: `#0C4A2C` / theme `color_primary_dark`
- Body text: `#16271D` / theme `color_text`
- Secondary text: `#4B5E52` / theme `color_text_secondary`
- Eyebrows and links: `#157145` / theme `color_primary`
- Text on green backgrounds: white or `#8ACB88` for eyebrows

## Local Font Files

The theme loads fonts from the Shopify `assets` folder:

- `staatliches-latin-400-normal.woff2`
- `Satoshi-Regular.woff2`
- `Satoshi-Medium.woff2`
- `Satoshi-Bold.woff2`

Do not load fonts from Google Fonts or external CSS at runtime.
