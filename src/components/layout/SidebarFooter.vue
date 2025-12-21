<template>
  <div class="sidebar-footer commons-flex-center commons-justify-center">
    <button
      class="shrink-button commons-flex-center commons-rounded-4 commons-pointer commons-transition-bg-ease"
      @click="$emit('toggle-sidebar')"
    >
      <span class="icon-left shrink-icon commons-flex-shrink-0"></span>
      <span class="shrink-text commons-fs-14 commons-fw-500 commons-color-white">{{ buttonText }}</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
    default: 'Shrink'
  },
  isCollapsed: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle-sidebar']);
</script>
