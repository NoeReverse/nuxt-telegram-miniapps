<script setup lang="ts">
const props = withDefaults(defineProps<{
  /** Section title */
  title?: string
  /** Adds margins around the section (automatically on iOS and macOS) */
  inset?: boolean
  /** Adds paddings inside section, use if no cells inside */
  content?: boolean
}>(), {
  inset: undefined,
})

const { isApple } = usePlatform()
const inset = computed(() => props.inset ?? isApple)
</script>

<template>
  <div :class="inset ? 'px-4' : 'last:pb-0'">
    <!-- begin::iOS TITLE -->
    <h2 v-if="title && inset" class="px-3 text-xs uppercase mb-1.5" :style="{ color: 'var(--tg-theme-section-header-text-color)' }">
      {{ title }}
    </h2>
    <!-- begin::iOS TITLE -->

    <div
      class="shadow-sm overflow-auto"
      :class="inset ? 'rounded-xl' : ''"
      :style="{ backgroundColor: 'var(--tg-theme-section-bg-color)' }"
    >
      <!-- begin::NOT iOS TITLE -->
      <h2 v-if="title && !inset" class="tg-title tg-content pt-3.5">
        {{ title }}
      </h2>
      <!-- begin::NOT iOS TITLE -->

      <!-- begin::CONTENT -->
      <div :class="content ? `px-3 ${title ? 'pt-2' : 'pt-4'} pb-4` : 'p-0'">
        <slot />
      </div>
      <!-- end::CONTENT -->
    </div>

    <!-- begin::APPEND -->
    <div v-if="$slots.append" class="pt-2 px-5 tg-hint text-xs">
      <slot name="append" />
    </div>
    <!-- end::APPEND -->
  </div>
</template>
