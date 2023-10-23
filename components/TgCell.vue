<script setup lang="ts">
import type { DefaultButtonProps } from '../composables/buttons'

interface CellProps extends DefaultButtonProps {
  title?: string
  subtitle?: string
  description?: string
  icon?: string
  lineClamp?: number
  color?:
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
}

const props = withDefaults(defineProps<CellProps>(), {
  color: 'default',
})

const colorClasses = computed(() => ({
  default: { icon: 'tg-hint', title: 'tg-text' },
  primary: { icon: 'tg-link', title: 'tg-link' },
  success: { icon: 'text-success-500', title: 'text-success-500' },
  info: { icon: 'text-info-500', title: 'text-info-500' },
  warning: { icon: 'text-warning-500', title: 'text-warning-500' },
  danger: { icon: 'text-danger-500', title: 'text-danger-500' },
}[props.color]))

const icon = computed(() => {
  return props.icon ? { size: '21', name: props.icon, class: [colorClasses.value.icon] } : null
})

const lineClamp = computed(() => {
  const lines = props.lineClamp ? String(props.lineClamp) : icon.value ? '1' : 'none'
  return `line-clamp-${lines}`
})

const { component, attributes } = useTgButton(props)

const titleProps = computed(() => {
  return [colorClasses.value.title, props.subtitle && props.description ? 'font-medium text-sm' : '']
})

/**
 * Padding depends on the number of text blocks
 * The standard padding is 4
 * If description or subtitle is set, the padding is 2
 * If one of the two is set, the padding is 3
 */
const paddingYLevel = computed(() => {
  let py = 4
  if (props.description && props.subtitle)
    py = 2
  return py
})

const padding = computed(() => {
  return `${['py-0', 'py-1', 'py-2', 'py-3', 'py-4'][paddingYLevel.value]}`
})

const pt = computed(() => {
  const level = 4 - paddingYLevel.value
  return `${['first:mt-0', 'first:mt-1', 'first:mt-2'][level]}`
})
</script>

<template>
  <component :is="component" v-bind="attributes" class="group flex select-none tg-bg" :class="pt">
    <div class="min-w-[1.25rem] flex">
      <div
        v-if="icon || $slots.icon"
        class="w-16 flex justify-center"
        :class="props.description || props.subtitle ? padding : 'items-center'"
      >
        <slot name="icon">
          <Icon :name="icon.name" :class="icon.class" :size="icon.size" />
        </slot>
      </div>
    </div>

    <div class="flex-grow flex border-b tg-border group-last:border-none items-center" :class="padding">
      <div class="flex flex-col justify-center">
        <p v-if="props.title" class="line-clamp-1 leading-none overflow-visible" :class="titleProps">
          {{ props.title }}
        </p>
        <p v-if="props.subtitle" class="text-xs leading-none pt-2" :class="lineClamp">
          {{ props.subtitle }}
        </p>
        <p v-if="props.description" class="tg-hint leading-none text-xs" :class="[props.subtitle ? 'pt-1.5' : 'pt-2', lineClamp]">
          {{ props.description }}
        </p>

        <slot />
      </div>

      <div v-if="$slots.right" class="ms-auto shrink-0 pr-5" :class="props.to ? 'pl-4 border-l tg-border' : ''">
        <slot name="right" />
      </div>
    </div>
  </component>
</template>
