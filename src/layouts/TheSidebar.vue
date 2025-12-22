<template>
  <!-- Sidebar -->
  <div class="app-sidebar commons-h-full commons-flex-col commons-justify-between commons-relative">
    <div class="icon-sidebar-background sidebar-bg-image"></div>
    <div class="sidebar-menu commons-flex-1">
      <!-- Menu Item Component -->
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="menu-item commons-flex-center commons-rounded-4 commons-pointer commons-transition-bg-ease"
        :class="{ active: item.id === activeMenuItem }"
        @click="handleMenuClick(item)"
      >
        <span
          :class="['menu-icon', item.iconClass, 'commons-flex-center-all', 'commons-flex-shrink-0']"
        ></span>
        <span
          class="menu-text commons-fs-14 commons-fw-500 commons-text-nowrap commons-text-ellipsis"
          >{{ item.text }}</span
        >
      </div>
    </div>

    <!-- Sidebar Footer Component -->
    <div class="sidebar-footer commons-flex-center commons-justify-center">
      <button
        class="shrink-button commons-flex-center commons-rounded-4 commons-pointer commons-transition-bg-ease"
        @click="toggleSidebar"
      >
        <span class="icon-left shrink-icon commons-flex-shrink-0"></span>
        <span class="shrink-text commons-fs-14 commons-fw-500 commons-color-white">{{
          sidebarCollapsed ? 'Expand' : 'Shrink'
        }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeMenuItem = ref('candidates')
const sidebarCollapsed = ref(false)

const menuItems = ref([
  { id: 'jobs', text: 'Jobs', iconClass: 'icon-sidebar-jobs' },
  { id: 'candidates', text: 'Candidates', iconClass: 'icon-sidebar-candidates' },
  { id: 'schedule', text: 'Schedule', iconClass: 'icon-sidebar-schedule' },
  { id: 'talent-pool', text: 'Talent pool', iconClass: 'icon-sidebar-talent-pool' },
  {
    id: 'recruitment-campaign',
    text: 'Recruitment campaign',
    iconClass: 'icon-sidebar-recruitment-campaign',
  },
  { id: 'tasks', text: 'Tasks', iconClass: 'icon-sidebar-tasks' },
  { id: 'ai-marketing', text: 'aiMarketing', iconClass: 'icon-ai-marketing' },
  { id: 'communication', text: 'Communication with candidate', iconClass: 'icon-communication' },
  { id: 'reports', text: 'Report', iconClass: 'icon-reports' },
  { id: 'settings', text: 'Settings', iconClass: 'icon-sidebar-settings' },
  { id: 'useful-knowledge', text: 'Useful knowledge', iconClass: 'icon-knowledge-header-right' },
])

const handleMenuClick = (item) => {
  activeMenuItem.value = item.id
  console.log('Menu clicked:', item)
  // Implement navigation logic here
}

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
  console.log('Sidebar toggled:', sidebarCollapsed.value)
  // Implement sidebar toggle logic here
}
</script>
