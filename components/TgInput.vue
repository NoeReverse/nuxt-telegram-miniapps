<script setup lang="ts">
const props = defineProps<{
  value: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:value': [value: string]
}>()

const value = useVModel(props, 'value', emit)
</script>

<template>
  <div class="w-full">
    <input
      v-model="value"
      :placeholder="props.placeholder ?? 'Input'"
      class="w-full focus:outline-none text-[var(--tg-theme-text-color)] placeholder:text-[var(--tg-theme-hint-color)]"
    >
  </div>
</template>
