<template>
  <div
    class="base-file-upload commons-w-full commons-flex-col commons-flex-center-all commons-pointer"
    @click="$refs.fileInput.click()"
    @dragover.prevent
    @drop.prevent="handleDrop"
  >
    <input
      ref="fileInput"
      type="file"
      class="commons-display-none"
      :accept="accept"
      @change="handleChange"
    />
    <template v-if="!file">
      <span class="base-file-upload-text commons-fs-13">{{ uploadText }}</span>
      <span class="base-file-upload-hint commons-fs-13">{{ hintText }}</span>
    </template>
    <template v-else>
      <span class="base-file-upload-text commons-fs-13">{{ file.name }}</span>
      <span
        class="commons-fs-13 commons-color-primary commons-pointer"
        @click.stop="removeFile"
        style="margin-top: 4px; text-decoration: underline"
        >Remove</span
      >
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  accept: {
    type: String,
    default: '.pdf,.doc,.docx',
  },
  maxSize: {
    type: Number,
    default: 15 * 1024 * 1024, // 15MB in bytes
  },
  uploadText: {
    type: String,
    default: 'Drag and drop or click here to upload CV',
  },
  hintText: {
    type: String,
    default: 'Accept .pdf and .doc files (Max size 15 Mb)',
  },
})

const emit = defineEmits(['file-selected'])

const fileInput = ref(null)
const file = ref(null)

const validateFile = (selectedFile) => {
  if (!selectedFile) return false

  if (selectedFile.size > props.maxSize) {
    alert(`File too large (max ${props.maxSize / (1024 * 1024)}MB)`)
    return false
  }

  const ext = selectedFile.name.split('.').pop().toLowerCase()
  const allowedExts = props.accept.split(',').map((a) => a.trim().replace('.', ''))

  if (!allowedExts.includes(ext)) {
    alert(`Invalid file format. Only ${props.accept} allowed.`)
    return false
  }

  return true
}

const handleFile = (selectedFile) => {
  if (validateFile(selectedFile)) {
    file.value = selectedFile
    emit('file-selected', selectedFile)
  }
}

const handleChange = (e) => {
  const selectedFile = e.target.files[0]
  handleFile(selectedFile)
  // Reset input value to allow re-selecting the same file if needed
  e.target.value = ''
}

const handleDrop = (e) => {
  const selectedFile = e.dataTransfer.files[0]
  handleFile(selectedFile)
}

const removeFile = () => {
  file.value = null
  emit('file-selected', null)
}
</script>

<style scoped>
.base-file-upload {
  height: 100px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}

.base-file-upload:hover {
  border-color: #2970f6;
  background-color: #f5f9ff;
}

.base-file-upload-text {
  color: #2970f6;
  line-height: 17.64px;
  margin-bottom: 8px;
}

.base-file-upload-hint {
  color: #6a727d;
  line-height: 17.64px;
}
</style>
