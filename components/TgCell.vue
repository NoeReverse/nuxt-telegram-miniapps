<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /** Route location that can be passed to router.push() and other user-facing APIs */
    to?: RouteLocationRaw
    /** External link */
    href?: string
    rel?: string
    target?: string
    type?: 'button' | 'submit' | 'reset'
    /** Main text of the cell */
    title?: string
    /** Not faded small text, positioned before description */
    subtitle?: string
    /** Faded small text or hint */
    description?: string
    /** Name of the icon (look: https://icones.js.org/) */
    icon?: string
    /** Color of the icon (works only on iOS and MacOS) */
    iconColor?: string
    /** Line clamp of the subtitle and description */
    lineClamp?: number
    /** Determines whether to show the border at the bottom */
    border?: boolean
    /** Can be default, primary, danger */
    color?:
      | 'default'
      | 'link'
      | 'danger'
  }>(),
  {
    color: 'default',
    iconColor: 'var(--tg-theme-hint-color)',
    border: true,
  },
)

const { isApple } = usePlatform()

const colors = computed(() => ({
  default: { icon: 'var(--tg-theme-hint-color)', title: 'var(--tg-theme-text-color)' },
  link: { icon: 'var(--tg-theme-link-color)', title: 'var(--tg-theme-link-color)' },
  danger: { icon: 'var(--tg-theme-destructive-text-color)', title: 'var(--tg-theme-destructive-text-color)' },
}[props.color]))

const lineClamp = computed(() => {
  const lines = props.lineClamp ? String(props.lineClamp) : props.icon ? '1' : 'none'
  return `line-clamp-${lines}`
})

const { component, attributes } = useTgButton(props)

const titleProps = computed(() => {
  return [props.subtitle && props.description ? 'font-medium text-sm' : '']
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

const border = computed(() => {
  return props.border ? 'border-b tg-border group-last:border-none' : ''
})

const pt = computed(() => {
  const level = 4 - paddingYLevel.value
  return `${['first:mt-0', 'first:mt-1', 'first:mt-2'][level]}`
})
</script>

<template>
  <component :is="component" v-bind="attributes" class="w-full group flex select-none bg-transparent" :class="pt">
    <div class="min-w-[1rem] flex shrink-0">
      <div
        v-if="icon || $slots.prepend"
        class="w-16 flex justify-center"
        :class="description || subtitle ? padding : 'items-center'"
      >
        <slot name="prepend">
          <TgIconBox
            :icon="props.icon"
            :size="isApple ? 'sm' : 'lg'"
            :color="isApple ? 'white' : colors.icon"
            :background-color="isApple ? iconColor : 'transparent'"
            :round="false"
          />
        </slot>
      </div>
    </div>

    <div class="flex-grow flex items-center pr-5" :class="[padding, border]">
      <div class="flex flex-col justify-center items-start w-full">
        <p
          v-if="title"
          class="line-clamp-1 leading-none overflow-visible"
          :class="titleProps"
          :style="{ color: colors.title }"
        >
          {{ title }}
        </p>
        <p v-if="subtitle" class="text-xs leading-none pt-2" :class="lineClamp">
          {{ subtitle }}
        </p>
        <p v-if="description" class="tg-hint leading-none text-xs" :class="[subtitle ? 'pt-1.5' : 'pt-2', lineClamp]">
          {{ description }}
        </p>

        <slot />
      </div>

      <div v-if="$slots.right || to" class="ms-auto shrink-0 pl-4" :class="!to ? 'border-l tg-border' : ''">
        <slot name="right">
          <Icon v-if="isApple" name="fluent:chevron-right-12-filled" class="tg-hint" />
        </slot>
      </div>
    </div>
  </component>
</template>
