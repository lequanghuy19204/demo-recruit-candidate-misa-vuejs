<template>
  <div class="commons-flex-col" style="margin-bottom: 16px">
    <label
      v-if="label"
      class="modal-add-candidate-label commons-fs-14 commons-fw-500 commons-color-primary commons-flex-center"
    >
      {{ label }} <span v-if="required" class="modal-add-candidate-required">*</span>
    </label>
    <div
      class="modal-add-candidate-select commons-w-full commons-flex-center commons-rounded-4 commons-bg-white commons-pointer commons-relative"
      :class="{ active: isOpen }"
      @click="toggleDropdown"
      v-click-outside="closeDropdown"
    >
      <span
        class="modal-add-candidate-select-text commons-flex-1 commons-fs-14"
        :class="{ 'has-value': modelValue }"
      >
        {{ selectedLabel || placeholder }}
      </span>
      <div class="modal-add-candidate-select-icon commons-flex-center-all">
        <span class="modal-add-candidate-icon-dropdown"></span>
      </div>

      <div class="modal-add-candidate-dropdown-menu">
        <div
          v-for="option in options"
          :key="option.value"
          class="modal-add-candidate-dropdown-item"
          :class="{ selected: option.value === modelValue }"
          @click.stop="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
    <span v-if="error" class="commons-fs-12" style="color: red; margin-top: 4px">{{ error }}</span>
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
  const option = props.options.find((opt) => opt.value === props.modelValue)
  return option ? option.label : ''
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
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
