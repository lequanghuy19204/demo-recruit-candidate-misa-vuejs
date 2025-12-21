<template>
  <div :class="['input-wrapper commons-flex-center commons-rounded-4', wrapperClass]">
    <span v-if="icon" :class="[icon, 'input-icon']"></span>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="commons-flex-1 commons-border-none commons-outline-none commons-fs-14 commons-bg-transparent"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: 'commons-bg-white',
  },
})

defineEmits(['update:modelValue', 'focus', 'blur'])
</script>

<style scoped>
.input-wrapper {
  padding: 0 8px;
  height: 36px;
  border: 1px solid #e0e0e0;
}

.input-wrapper:focus-within {
  border-color: #2680eb;
}

.input-icon {
  margin-right: 8px;
}
</style>
