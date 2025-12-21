<template>
  <div class="commons-flex-col" style="margin-bottom: 16px">
    <label
      v-if="label"
      :for="id"
      class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }} <span v-if="required" class="modal-add-candidate-required">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="modal-add-candidate-input commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <span v-if="error" class="commons-fs-12" style="color: red; margin-top: 4px">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
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
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue', 'blur'])
</script>
