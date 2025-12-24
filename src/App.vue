<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TheHeader from './layouts/TheHeader.vue'
import TheSidebar from './layouts/TheSidebar.vue'

const route = useRoute()
const showLayout = computed(() => !route.meta.hideLayout)
</script>

<template>
  <div class="container commons-w-full commons-display-flex commons-flex-column">
    <TheHeader v-if="showLayout" />
    <div class="content commons-w-full commons-flex-1 commons-display-flex commons-overflow-hidden">
      <TheSidebar v-if="showLayout" />
      <RouterView />
    </div>
  </div>
</template>
