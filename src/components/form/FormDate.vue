<template>
  <div class="commons-flex-col" style="margin-bottom: 16px">
    <label
      v-if="label"
      class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }}
      <span v-if="hint" class="modal-add-candidate-row-label-hint commons-fs-14">{{ hint }}</span>
      <span v-if="required" class="modal-add-candidate-required">*</span>
    </label>
    <div class="modal-add-candidate-date-input commons-w-full commons-flex-center commons-bg-white">
      <input
        ref="dateInput"
        type="date"
        :value="modelValue"
        :placeholder="placeholder"
        class="commons-flex-1 commons-border-none commons-fs-14 commons-color-primary commons-outline-none commons-bg-transparent"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div
        class="modal-add-candidate-date-input-icon commons-flex-center-all commons-pointer"
        @click="openDatePicker"
      >
        <span class="modal-add-candidate-icon-calendar"></span>
      </div>
    </div>
    <span v-if="error" class="commons-fs-12" style="color: red; margin-top: 4px">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'dd/MM/yyyy',
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

const dateInput = ref(null)

const openDatePicker = () => {
  if (dateInput.value) {
    dateInput.value.showPicker()
  }
}
</script>
