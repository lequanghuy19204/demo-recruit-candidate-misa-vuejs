<template>
  <div class="navbar-logo icon-logo-backgroud commons-flex-center">
    <div class="icon-swich-app-white"></div>
    <div class="icon-logo-header-left"></div>
    <div class="commons-fs-20 commons-fw-700">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Recruitment',
  },
})
</script>
