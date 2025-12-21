<template>
  <div class="navbar-search commons-flex-center commons-rounded-4">
    <div class="icon-search"></div>
    <input
      type="text"
      class="search-input commons-flex-1 commons-border-none commons-bg-transparent commons-fs-14 commons-outline-none"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="$emit('search')"
    />
  </div>
</template>

<script setup>
defineProps({
  placeholder:{
    type: String,
    default: 'Search...'
  },
  modelValue: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue', 'search']);
</script>
