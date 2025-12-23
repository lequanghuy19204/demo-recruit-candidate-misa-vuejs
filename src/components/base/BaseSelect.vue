<template>
  <div :class="['base-select-container', { 'has-label': label }]">
    <label
      v-if="label"
      class="base-select-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }}
      <span v-if="hint" class="base-select-hint commons-fs-14">{{ hint }}</span>
      <span v-if="required" class="base-select-required">*</span>
    </label>
    <div
      class="base-select-wrapper commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
      :class="{ active: isOpen }"
      @click="toggleDropdown"
      v-click-outside="closeDropdown"
    >
      <span
        class="base-select-text commons-flex-1 commons-fs-14"
        :class="{ 'has-value': modelValue }"
      >
        {{ selectedLabel || placeholder }}
      </span>
      <div class="base-select-icon commons-flex-center-all">
        <span class="modal-add-candidate-icon-dropdown"></span>
      </div>

      <div class="base-select-dropdown-menu">
        <div
          v-for="option in options"
          :key="option.value"
          class="base-select-dropdown-item"
          :class="{ selected: option.label === modelValue }"
          @click.stop="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
    <span v-if="error" class="base-select-error commons-fs-12">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
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
    default: 'Select option',
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

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const selectedLabel = computed(() => {
  const option = props.options.find((opt) => opt.label === props.modelValue)
  return option ? option.label : props.modelValue
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectOption = (option) => {
  emit('update:modelValue', option.label)
  closeDropdown()
}

const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
}
</script>

<style scoped>
.base-select-container {
  display: flex;
  flex-direction: column;
}

.base-select-container.has-label {
  margin-bottom: 16px;
}

.base-select-label {
  line-height: 25px;
  margin-bottom: 0;
}

.base-select-hint {
  color: #b2b2b2;
  line-height: 25px;
  margin-left: 4px;
}

.base-select-required {
  color: #ff1d1d;
  margin-left: 4px;
}

.base-select-wrapper {
  height: 34px;
  border: 1px solid #dddde4;
  transition: border-color 0.2s;
}

.base-select-wrapper.active {
  border-color: #2970f6;
}

.base-select-text {
  padding: 0 12px;
  color: #9e9e9e;
  line-height: 19px;
}

.base-select-text.has-value {
  color: #1e2633;
}

.base-select-icon {
  width: 32px;
  height: 30px;
  border-left: 1px solid #dddde4;
}

.base-select-wrapper.active .modal-add-candidate-icon-dropdown {
  transform: rotate(180deg);
}

.modal-add-candidate-icon-dropdown {
  transition: transform 0.2s;
}

.base-select-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #dddde4;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  display: none;
}

.base-select-wrapper.active .base-select-dropdown-menu {
  display: block;
}

.base-select-dropdown-item {
  padding: 8px 12px;
  font-size: 14px;
  color: #1e2633;
  cursor: pointer;
  transition: background-color 0.15s;
}

.base-select-dropdown-item:hover {
  background-color: #f5f9ff;
}

.base-select-dropdown-item.selected {
  background-color: #e8f0fe;
  color: #2970f6;
}

.base-select-error {
  color: red;
  margin-top: 4px;
}
</style>
