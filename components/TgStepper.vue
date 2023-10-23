<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: number
  /** Button text */
  title: string
  addClass?: string
  subtractClass?: string
  min?: number
  max?: number
  showNumber?: boolean
}>(), {
  min: 0,
  max: Number.POSITIVE_INFINITY,
  addClass: 'bg-sky-700',
  subtractClass: 'bg-red-700',
})

const emit = defineEmits(['update:value'])

function add() {
  if (props.value < props.max)
    emit('update:value', props.value + 1)
}
function subtract() {
  if (props.value > props.min)
    emit('update:value', props.value - 1)
}
</script>

<template>
  <div class="h-6 text-sm relative select-none" :class="props.showNumber ? 'w-[100px]' : 'w-[80px]'">
    <!-- LEFT BUTTON -->
    <div class="absolute inset-0 pr-2" @click="subtract()">
      <div
        class="btn-left-wrapper"
        :class="[
          props.subtractClass,
          props.value > 0 ? '' : 'inactive',
          props.showNumber ? 'w-1/3' : 'w-1/2',
        ]"
      >
        <Icon name="ic:baseline-minus" class="w-full icon" size="18" />
      </div>
    </div>

    <!-- NUMBER WRAPPER -->
    <div
      v-if="props.showNumber"
      class="icon text-center w-1/3 font-medium"
      @click="subtract()"
    >
      {{ props.value }}
    </div>

    <!-- RIGHT BUTTON -->
    <div
      class="btn-right-wrapper"
      :class="[
        props.addClass,
        props.value === 0 ? 'w-full' : props.showNumber ? 'w-1/3' : 'w-1/2',
        props.value === props.max ? 'disabled' : '',
      ]"
      style="background-color: var(--tg-theme-button-color);"
      @click="add()"
    >
      <div class="p-1 relative w-full h-full">
        <span
          class="icon tg-button-text text-sm transform-all duration-250 ease-in-out"
          :class="props.value > 0 ? 'off' : ''"
        >
          {{ props.title }}
        </span>
        <Icon
          name="ic:baseline-plus"
          size="18"
          :class="props.value > 0 ? '' : 'off'"
          class="icon tg-button-text transform-all duration-250 ease-in-out"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-left-wrapper {
  @apply z-40 h-6 rounded p-1 !text-white transition-transform duration-150 text-sm text-center font-medium relative;
}
.btn-right-wrapper {
  @apply z-50 h-full absolute right-0 flex items-center transition-all duration-150 rounded text-sm text-center font-medium overflow-hidden;
}
.inactive {
  transform: scale(0.9, 0.9);
}
.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.icon.off {
  opacity: 0;
}
.disabled {
  @apply !bg-gray-200 dark:!bg-gray-500;
}
</style>
