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
    default: '../assets/images/avatar.jpg',
  },
  icons: {
    type: Array,
    default: () => [
      { name: 'notification', class: 'icon-notification-version-header-right' },
      { name: 'store', class: 'icon-store-header-right' },
      { name: 'user', class: 'icon-user-controlpanel-header-right' },
      { name: 'messbox', class: 'icon-messbox-header-right' },
      { name: 'notificationbox', class: 'icon-notificationbox-header-right' },
      { name: 'helpmenu', class: 'icon-helpmenu-header-right' },
      { name: 'moremenu', class: 'icon-moremenu-header-right' },
      { name: 'knowledge', class: 'icon-knowledge-header-right' },
    ],
  },
})

defineEmits(['icon-click', 'user-click'])
</script>
