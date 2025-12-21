<template>
  <div
    class="modal-add-candidate-upload-cv commons-w-full commons-flex-col commons-flex-center-all commons-pointer"
    @click="$refs.fileInput.click()"
    @dragover.prevent
    @drop.prevent="handleDrop"
  >
    <input
      ref="fileInput"
      type="file"
      class="commons-display-none"
      accept=".pdf,.doc,.docx"
      @change="handleChange"
    />
    <template v-if="!file">
      <span class="modal-add-candidate-upload-cv-text commons-fs-13"
        >Drag and drop or click here to upload CV</span
      >
      <span class="modal-add-candidate-upload-cv-hint commons-fs-13"
        >Accept .pdf and .doc files (Max size 15 Mb)</span
      >
    </template>
    <template v-else>
      <span class="modal-add-candidate-upload-cv-text commons-fs-13">{{ file.name }}</span>
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

const emit = defineEmits(['file-selected'])

const fileInput = ref(null)
const file = ref(null)

const validateFile = (selectedFile) => {
  if (!selectedFile) return false

  if (selectedFile.size > 15 * 1024 * 1024) {
    alert('File too large (max 15MB)')
    return false
  }

  const ext = selectedFile.name.split('.').pop().toLowerCase()
  if (!['pdf', 'doc', 'docx'].includes(ext)) {
    alert('Invalid file format. Only PDF and DOC allowed.')
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
