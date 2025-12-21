<template>
  <div
    class="menu-item commons-flex-center commons-rounded-4 commons-pointer commons-transition-bg-ease"
    :class="{ active: isActive }"
    @click="$emit('click', item)"
  >
    <span
      :class="['menu-icon', iconClass, 'commons-flex-center-all', 'commons-flex-shrink-0']"
    ></span>
    <span
      class="menu-text commons-fs-14 commons-fw-500 commons-text-nowrap commons-text-ellipsis"
      >{{ text }}</span
    >
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    default: () => ({}),
  },
})

defineEmits(['click'])
</script>
