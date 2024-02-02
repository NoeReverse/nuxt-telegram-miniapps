<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string
  text?: string
  round?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?:
    | 'primary'
    | 'danger'
  class?: string
}>(), {
  size: 'md',
  color: 'primary',
  class: '',
  round: true,
})

const size = computed(() => {
  return {
    sm: { class: 'h-6 w-6', icon: 'text-base', round: 'rounded-md' },
    md: { class: 'h-10 w-10', icon: 'text-xl', round: 'rounded-lg' },
    lg: { class: 'h-12 w-12', icon: 'text-2xl', round: 'rounded-lg' },
    xl: { class: 'h-14 w-14', icon: 'text-3xl', round: 'rounded-xl' },
  }[props.size]
})

const color = computed(() => {
  return props.class || {
    primary: 'bg-gradient-to-b from-[var(--tg-theme-button-color-light)] to-[var(--tg-theme-button-color)]',
    danger: 'bg-[var(--tg-theme-destructive-text-color)]',
  }[props.color]
})

const rounded = computed(() => props.round ? 'rounded-full' : size.value.round)

const className = computed(() => `${size.value.class} ${color.value} ${rounded.value}`)
</script>

<template>
  <div class="flex items-center justify-center tg-button-text" :class="className">
    <Icon v-if="props.icon" :name="props.icon" :class="size.icon" />
    <span v-else-if="props.text">{{ props.text }}</span>
  </div>
</template>
