<script setup lang="ts">
const { isApple } = usePlatform()
</script>

<template>
  <client-only>
    <div
      class="min-h-screen flex flex-col gap-4"
      :class="isApple ? 'pb-6' : ''"
      :style="{ backgroundColor: 'var(--tg-theme-secondary-bg-color)' }"
    >
      <slot />
    </div>
  </client-only>
</template>
