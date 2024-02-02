<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    to?: RouteLocationRaw
    href?: string
    disabled?: boolean
    rel?: string
    target?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    loading?: boolean
    text?: boolean
    icon?: string
    color?: 'primary' | 'danger'
  }>(),
  {
    type: 'button',
    size: 'md',
    disabled: false,
    badge: false,
    rel: '',
    target: '',
    text: false,
    color: 'primary',
  },
)

const { component, attributes, className } = useTgButton(props)

const buttonClass = computed(() => {
  const sizes = {
    sm: 'h-6 px-4 text-sm rounded',
    md: 'h-9 px-5 text-sm rounded',
    lg: 'h-11 px-5 text-sm rounded',
    xl: 'h-13 px-5 rounded-lg',
  }

  const colors = {
    primary: 'tg-button',
    danger: 'tg-button-danger',
  }

  return !props.text
    ? `inline-block flex items-center justify-center font-medium w-full text-center align-middle cursor-pointer select-none focus:outline-none  ${sizes[props.size]} ${className.value} ${colors[props.color]}`
    : 'tg-link'
})
</script>

<template>
  <component :is="component" v-bind="attributes" :class="buttonClass">
    <Icon v-if="props.icon" :name="props.icon" size="18" class="mr-1.5" />
    <slot />
  </component>
</template>
