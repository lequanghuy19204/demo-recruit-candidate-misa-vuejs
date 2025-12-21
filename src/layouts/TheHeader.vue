<template>
  <!-- Header -->
  <div class="app-navbar commons-w-full commons-flex-center">
    <div class="navbar-content commons-w-full commons-flex-between">
      <div class="navbar-left commons-flex-center">
        <LogoIndex :title="appTitle" />
        <SearchBox
          v-model="searchQuery"
          placeholder="Search job, candidates, talents..."
          @search="handleSearch"
        />
      </div>
      <UserMenu
        :avatar="userAvatar"
        :icons="headerIcons"
        @icon-click="handleIconClick"
        @user-click="handleUserClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LogoIndex from '@/components/layout/LogoIndex.vue'
import SearchBox from '@/components/layout/SearchBox.vue'
import UserMenu from '@/components/layout/UserMenu.vue'

const appTitle = ref('Recruitment')
const searchQuery = ref('')
const userAvatar = ref('../assets/images/avatar.jpg')

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
