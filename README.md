# Nuxt Telegram Miniapps UI Kit

This is an experiment in building a library of Telegram web application interface components. All components inherit the design concept of Telegram for Android, but do not try to match it exactly.  

⚠️ Please do not use this library in real projects until the first stable version is published.

## Usage

This component library is Nuxt Layer. To use it, just add the `extends` setting.

```ts
export default defineNuxtConfig({
  extends: [
    'github:NoeReverse/nuxt-telegram-miniapps',
  ]
})
```

## Components

### TgCell
This is the main component of the menu. It automatically sets paddings, icon positioning, colors and dividers.

#### Props
| Name | Type | Description |
| ---- | ---- | ----------- |
| title | string | The main text of the cell |
| description | string | The faded small text or hint |
| subtitle | string | Not faded small text, positioned before description |
| icon | string | The name of the icon (look: https://icones.js.org/) |
| line-clamp | string | The line clamp of the subtitle and description |
| color | string | Can be `default`, `primary`, `success`, `info`, `warning`, `danger` |

### TgSection
A component within which you can place TgCell`s groups or any content block of a web application

#### Props
| Name | Type | Description |
| ---- | ---- | ----------- |
| title | string | The panel title |
| content | boolean | Specifies whether to add paddings |
| inset | boolean | Specifies whether to add ьmargins |