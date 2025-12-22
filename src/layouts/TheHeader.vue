<template>
  <!-- Header -->
  <div class="app-navbar commons-w-full commons-flex-center">
    <div class="navbar-content commons-w-full commons-flex-between">
      <div class="navbar-left commons-flex-center">
        <!-- Logo Component -->
        <div class="navbar-logo icon-logo-backgroud commons-flex-center">
          <div class="icon-swich-app-white"></div>
          <div class="icon-logo-header-left"></div>
          <div class="commons-fs-20 commons-fw-700">{{ appTitle }}</div>
        </div>

        <!-- Search Box Component -->
        <div class="navbar-search commons-flex-center commons-rounded-4">
          <div class="icon-search"></div>
          <input
            type="text"
            class="search-input commons-flex-1 commons-border-none commons-bg-transparent commons-fs-14 commons-outline-none"
            placeholder="Search job, candidates, talents..."
            :value="searchQuery"
            @input="searchQuery = $event.target.value"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>

      <!-- User Menu Component -->
      <div class="navbar-right commons-flex-center">
        <div
          v-for="icon in headerIcons"
          :key="icon.name"
          :class="icon.class"
          @click="handleIconClick(icon.name)"
        ></div>
        <div class="navbar-user commons-rounded-full" @click="handleUserClick">
          <img :src="userAvatar" alt="Avatar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AvatarImage from '@/assets/images/avatar.jpg'

const appTitle = ref('Recruitment')
const searchQuery = ref('')
const userAvatar = ref(AvatarImage)

const headerIcons = ref([
  { name: 'notification', class: 'icon-notification-version-header-right' },
  { name: 'store', class: 'icon-store-header-right' },
  { name: 'user', class: 'icon-user-controlpanel-header-right' },
  { name: 'messbox', class: 'icon-messbox-header-right' },
  { name: 'notificationbox', class: 'icon-notificationbox-header-right' },
  { name: 'helpmenu', class: 'icon-helpmenu-header-right' },
  { name: 'moremenu', class: 'icon-moremenu-header-right' },
  { name: 'knowledge', class: 'icon-knowledge-header-right' },
])

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value)
  // Implement search logic here
}

const handleIconClick = (iconName) => {
  console.log('Icon clicked:', iconName)
  // Implement icon click logic here
}

const handleUserClick = () => {
  console.log('User avatar clicked')
  // Implement user menu logic here
}
</script>
