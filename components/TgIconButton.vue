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
    caption?: string
    icon: IconProp
    active?: boolean
    color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
  }>(),
  {
    type: 'button',
    size: 'md',
    disabled: false,
    badge: false,
    rel: '',
    target: '',
    caption: '',
    color: 'secondary',
  },
)

const { component, attributes, className } = useTgButton(props)

const icon = useTgIcon(props.icon, { size: '30' })
</script>

<template>
  <div class="flex flex-col items-center">
    <component
      :is="component"
      class="icon-btn" v-bind="attributes" :class="className"
    >
      <Icon :name="icon.name" :size="icon.size" :class="icon.class" />
    </component>
    <div class="mt-1">
      <span
        v-if="props.caption"
        class="text-sm"
        :class="props.active ? 'tg-text' : ''"
      >
        {{ props.caption }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.icon-btn {
  @apply h-12 w-12 flex justify-center items-center rounded-full;
}
</style>
