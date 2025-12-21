<template>
  <div class="select-wrapper commons-relative">
    <select
      :value="modelValue"
      class="commons-rounded-4 commons-fs-14 commons-pointer commons-outline-none"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
select {
  padding: 0 8px;
  height: 32px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
}

select:focus {
  border-color: #2680eb;
}
</style>
