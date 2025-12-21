<template>
  <div class="commons-flex-col" style="margin-bottom: 16px">
    <label
      v-if="label"
      class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }} <span v-if="required" class="modal-add-candidate-required">*</span>
    </label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      class="modal-add-candidate-textarea commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <span v-if="error" class="commons-fs-12" style="color: red; margin-top: 4px">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: [Number, String],
    default: 3,
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

defineEmits(['update:modelValue'])
</script>
