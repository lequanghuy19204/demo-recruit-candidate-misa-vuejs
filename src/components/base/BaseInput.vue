<template>
  <div :class="['base-input-container', { 'has-label': label }]">
    <label
      v-if="label"
      :for="id"
      class="base-input-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }}
      <span v-if="hint" class="base-input-hint commons-fs-14">{{ hint }}</span>
      <span v-if="required" class="base-input-required">*</span>
    </label>
    <div :class="['base-input-wrapper commons-flex-center commons-rounded-4', wrapperClass]">
      <span v-if="icon" :class="[icon, 'base-input-icon']"></span>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="commons-flex-1 commons-border-none commons-outline-none commons-fs-14 commons-bg-transparent"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
    </div>
    <span v-if="error" class="base-input-error commons-fs-12">{{ error }}</span>
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
  hint: {
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
  icon: {
    type: String,
    default: '',
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
  wrapperClass: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue', 'focus', 'blur'])
</script>

<style scoped>
.base-input-container {
  display: flex;
  flex-direction: column;
}

.base-input-container.has-label {
  margin-bottom: 16px;
}

.base-input-label {
  line-height: 25px;
  margin-bottom: 0;
}

.base-input-hint {
  color: #b2b2b2;
  line-height: 25px;
  margin-left: 4px;
}

.base-input-required {
  color: #ff1d1d;
  margin-left: 4px;
}

.base-input-wrapper {
  padding: 0 8px;
  height: 36px;
  border: 1px solid #dddde4;
  background-color: #ffffff;
  transition: border-color 0.2s;
}

.base-input-wrapper:focus-within {
  border-color: #2680eb;
}

.base-input-icon {
  margin-right: 8px;
}

.base-input-error {
  color: red;
  margin-top: 4px;
}

input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

input::placeholder {
  color: #9e9e9e;
}
</style>
