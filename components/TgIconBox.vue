<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string
  round?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?:
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  gradient?: boolean
}>(), {
  size: 'md',
  gradient: false,
})

const size = computed(() => {
  return {
    sm: { class: 'h-6 w-6', icon: '17', round: 'rounded-md' },
    md: { class: 'h-10 w-10', icon: '25', round: 'rounded-lg' },
    lg: { class: 'h-12 w-12', icon: '30', round: 'rounded-lg' },
    xl: { class: 'h-14 w-14', icon: '38', round: 'rounded-xl' },
  }[props.size]
})

const color = computed(() => {
  const color = {
    default: { bg: 'bg-[var(--th-hint-color)]', gradient: 'from-[var(--tg-theme-hint-color)] to-[var(--tg-theme-hint-color)]' },
    primary: { bg: 'tg-primary', gradient: 'from-[var(--tg-theme-button-color-light)] to-[var(--tg-theme-button-color)]' },
    success: { bg: 'bg-success-500', gradient: 'from-success-400 to-success-600' },
    info: { bg: 'bg-info-500', gradient: 'from-info-400 to-info-600' },
    warning: { bg: 'bg-warning-500', gradient: 'from-warning-400 to-warning-600' },
    danger: { bg: 'bg-danger-500', gradient: 'from-danger-400 to-danger-600' },
  }[props.color ?? 'default']
  return props.gradient ? `bg-gradient-to-b ${color.gradient}` : color.bg
})

const rounded = computed(() => props.round ? 'rounded-full' : size.value.round)

const className = computed(() => `${size.value.class} ${color.value} ${rounded.value}`)
</script>

<template>
  <div class="flex items-center justify-center tg-button-text" :class="className">
    <Icon :name="props.icon" :size="size.icon" />
  </div>
</template>
