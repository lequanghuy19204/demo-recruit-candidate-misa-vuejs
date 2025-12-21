<template>
  <div class="navbar-right commons-flex-center">
    <div
      v-for="icon in icons"
      :key="icon.name"
      :class="icon.class"
      @click="$emit('icon-click', icon.name)"
    ></div>
    <div class="navbar-user commons-rounded-full" @click="$emit('user-click')">
      <img :src="avatar" alt="Avatar" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: {
    type: String,
    required: true,
  },
  icons: {
    type: Array,
    required: true,
  },
})

defineEmits(['icon-click', 'user-click'])
</script>
