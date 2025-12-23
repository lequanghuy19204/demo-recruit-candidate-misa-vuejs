<template>
  <div :class="['base-date-container', { 'has-label': label }]">
    <label
      v-if="label"
      class="base-date-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }}
      <span v-if="hint" class="base-date-hint commons-fs-14">{{ hint }}</span>
      <span v-if="required" class="base-date-required">*</span>
    </label>
    <div class="base-date-input commons-w-full commons-flex-center commons-bg-white">
      <input
        ref="dateInput"
        type="date"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="commons-flex-1 commons-border-none commons-fs-14 commons-color-primary commons-outline-none commons-bg-transparent"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
      <div
        class="base-date-input-icon commons-flex-center-all commons-pointer"
        @click="openDatePicker"
      >
        <span class="modal-add-candidate-icon-calendar"></span>
      </div>
    </div>
    <span v-if="error" class="base-date-error commons-fs-12">{{ error }}</span>
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
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue', 'focus', 'blur'])

const dateInput = ref(null)

const openDatePicker = () => {
  if (dateInput.value && !dateInput.value.disabled) {
    dateInput.value.showPicker()
  }
}
</script>

<style scoped>
.base-date-container {
  display: flex;
  flex-direction: column;
}

.base-date-container.has-label {
  margin-bottom: 16px;
}

.base-date-label {
  line-height: 25px;
  margin-bottom: 0;
}

.base-date-hint {
  color: #b2b2b2;
  line-height: 25px;
  margin-left: 4px;
}

.base-date-required {
  color: #ff1d1d;
  margin-left: 4px;
}

.base-date-input {
  height: 34px;
  border: 1px solid #dddde4;
  border-radius: 4px;
  transition: border-color 0.2s;
}

.base-date-input:focus-within {
  border-color: #2970f6;
}

.base-date-input input {
  height: 100%;
  padding: 0 12px;
}

.base-date-input input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.base-date-input input::placeholder {
  color: #9e9e9e;
}

input[type='date']::-webkit-calendar-picker-indicator {
  opacity: 0;
  cursor: pointer;
}

.base-date-input-icon {
  width: 34px;
  height: 32px;
  border-left: 1px solid #dddde4;
}

.base-date-error {
  color: red;
  margin-top: 4px;
}
</style>
