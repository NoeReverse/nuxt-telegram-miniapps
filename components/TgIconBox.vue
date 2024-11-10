<script setup lang="ts">
import { theme } from '#tailwind-config'

const props = withDefaults(defineProps<{
  /** Name of the icon (look: https://icones.js.org/) */
  icon?: string
  /** Alt icon text */
  text?: string
  /** Display a circle or rounded rectangle */
  round?: boolean
  /** Icon size */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Icon color */
  color?: string
  /** Icon box (background) color */
  backgroundColor?: string
}>(), {
  size: 'md',
  color: 'white',
  backgroundColor: 'sky',
  round: true,
})

const color = computed(() => props.color in theme.colors
  ? theme.colors[props.color as keyof typeof theme.colors][500]
  : props.color)

const backgroundColor = computed(() => props.backgroundColor in theme.colors
  ? theme.colors[props.backgroundColor as keyof typeof theme.colors][500]
  : props.backgroundColor)

const size = computed(() => {
  return {
    sm: { class: 'h-6 w-6', icon: 'text-base', round: 'rounded-md' },
    md: { class: 'h-10 w-10', icon: 'text-xl', round: 'rounded-lg' },
    lg: { class: 'h-12 w-12', icon: 'text-2xl', round: 'rounded-lg' },
    xl: { class: 'h-14 w-14', icon: 'text-3xl', round: 'rounded-xl' },
  }[props.size]
})

const rounded = computed(() => props.round ? 'rounded-full' : size.value.round)
const className = computed(() => `${size.value.class} ${rounded.value}`)
</script>

<template>
  <div
    class="flex items-center justify-center tg-button-text"
    :class="className"
    :style="{ backgroundColor }"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="size.icon"
      :style="{ color }"
    />
    <span v-else-if="text">{{ text }}</span>
  </div>
</template>
