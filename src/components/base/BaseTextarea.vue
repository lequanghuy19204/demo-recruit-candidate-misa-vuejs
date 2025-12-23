<template>
  <div :class="['base-textarea-container', { 'has-label': label }]">
    <label
      v-if="label"
      class="base-textarea-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }}
      <span v-if="hint" class="base-textarea-hint commons-fs-14">{{ hint }}</span>
      <span v-if="required" class="base-textarea-required">*</span>
    </label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      class="base-textarea commons-w-full commons-fs-14 commons-color-primary commons-outline-none commons-bg-white"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    ></textarea>
    <span v-if="error" class="base-textarea-error commons-fs-12">{{ error }}</span>
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
  hint: {
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
</script>

<style scoped>
.base-textarea-container {
  display: flex;
  flex-direction: column;
}

.base-textarea-container.has-label {
  margin-bottom: 16px;
}

.base-textarea-label {
  line-height: 25px;
  margin-bottom: 0;
}

.base-textarea-hint {
  color: #b2b2b2;
  line-height: 25px;
  margin-left: 4px;
}

.base-textarea-required {
  color: #ff1d1d;
  margin-left: 4px;
}

.base-textarea {
  min-height: 80px;
  border: 1px solid #dddde4;
  border-radius: 3px;
  padding: 8px 12px;
  resize: vertical;
  transition: border-color 0.2s;
}

.base-textarea:focus {
  border-color: #2970f6;
}

.base-textarea:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.base-textarea::placeholder {
  color: #9e9e9e;
}

.base-textarea-error {
  color: red;
  margin-top: 4px;
}
</style>
