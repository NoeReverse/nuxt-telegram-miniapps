<script setup lang="ts">
definePageMeta({
  layout: 'webapp',
})

const colors = [
  { name: 'bg_color', var: '--tg-theme-bg-color' },
  { name: 'text_color', var: '--tg-theme-text-color' },
  { name: 'hint_color', var: '--tg-theme-hint-color' },
  { name: 'link_color', var: '--tg-theme-link-color' },
  { name: 'button_color', var: '--tg-theme-button-color' },
  { name: 'button_text_color', var: '--tg-theme-button-text-color' },
  { name: 'secondary_bg_color', var: '--tg-theme-secondary-bg-color' },
  { name: 'header_bg_color', var: '--tg-theme-header-bg-color' },
  { name: 'accent_text_color', var: '--tg-theme-accent-text-color' },
  { name: 'section_bg_color', var: '--tg-theme-section-bg-color' },
  { name: 'section_header_text_color', var: '--tg-theme-section-header-text-color' },
  { name: 'subtitle_text_color', var: '--tg-theme-subtitle-text-color' },
  { name: 'destructive_text_color', var: '--tg-theme-destructive-text-color' },
]
</script>

<template>
  <div>
    <TgSection title="Theme Colors">
      <TgCell v-for="color in colors" :key="color.name" :title="color.name">
        <template #right>
          <div class="rounded w-6 h-6 border tg-border" :style="`background-color: var(${color.var});`" />
        </template>
      </TgCell>
    </TgSection>
  </div>
</template>
