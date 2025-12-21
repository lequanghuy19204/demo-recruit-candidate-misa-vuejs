<template>
  <button
    :class="[
      'commons-flex-center-all commons-pointer commons-transition-bg commons-border-none',
      variantClass,
      customClass,
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="icon" :class="[icon, 'btn-icon', { 'commons-ml-2': text }]"></span>
    <span v-if="text" class="commons-fs-14 commons-fw-500">{{ text }}</span>
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'icon-only'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: '',
  },
})

defineEmits(['click'])

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'commons-bg-primary commons-color-white commons-rounded-4'
    case 'secondary':
      return 'commons-bg-white commons-color-primary commons-rounded-4'
    case 'icon-only':
      return 'commons-bg-transparent commons-flex-center-all'
    default:
      return ''
  }
})
</script>

<style scoped>
.commons-mr-2 {
  margin-right: 8px;
}
</style>
