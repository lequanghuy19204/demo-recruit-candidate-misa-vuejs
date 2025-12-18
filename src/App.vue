<script setup>
import TheHeader from './layouts/TheHeader.vue'
import TheSidebar from './layouts/TheSidebar.vue'
import Candidate from './views/candidates/CandidateView.vue'
</script>

<template>
  <div class="container commons-w-full commons-display-flex commons-flex-column">
    <TheHeader />
    <div class="content commons-w-full commons-flex-1 commons-display-flex commons-overflow-hidden">
      <TheSidebar />
      <Candidate />
    </div>
  </div>
</template>
