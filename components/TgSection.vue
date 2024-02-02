<script setup lang="ts">
const props = defineProps<{
  title?: string
  inset?: boolean
  content?: boolean
}>()
</script>

<template>
  <div class="pb-3" :class="inset ? 'px-5' : 'last:pb-0'">
    <div class="tg-section-bg shadow-sm overflow-auto" :class="inset ? 'rounded-2xl' : ''">
      <p v-if="props.title" class="tg-title tg-content pt-3.5">
        {{ props.title }}
      </p>
      <div :class="props.content ? `px-5 ${$props.title ? 'pt-2' : 'pt-4'} pb-4` : 'p-0'">
        <slot />
      </div>
    </div>

    <div v-if="$slots.append" class="pt-3 px-5 tg-hint text-xs">
      <slot name="append" />
    </div>
  </div>
</template>
