<script setup lang="ts">
const props = defineProps<{
  title?: string
  inset?: boolean
  content?: boolean
}>()
</script>

<template>
  <div class="pt-3" :class="inset ? 'px-5' : 'first:pt-0'">
    <div class="tg-bg shadow-sm overflow-auto" :class="inset ? 'rounded-2xl' : ''">
      <p v-if="props.title" class="tg-title tg-content pt-3.5">
        {{ props.title }}
      </p>
      <div :class="props.content ? `px-5 ${$props.title ? 'pt-2' : 'pt-4'} pb-4` : 'p-0'">
        <slot />
      </div>
    </div>
  </div>
</template>
