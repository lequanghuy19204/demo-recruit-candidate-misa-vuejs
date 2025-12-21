<template>
  <!-- Sidebar -->
  <div class="app-sidebar commons-h-full commons-flex-col commons-justify-between commons-relative">
    <div class="icon-sidebar-background sidebar-bg-image"></div>
    <div class="sidebar-menu commons-flex-1">
      <MenuItem
        v-for="item in menuItems"
        :key="item.id"
        :text="item.text"
        :icon-class="item.iconClass"
        :is-active="item.id === activeMenuItem"
        :item="item"
        @click="handleMenuClick"
      />
    </div>
    <SidebarFooter
      :button-text="sidebarCollapsed ? 'Expand' : 'Shrink'"
      :is-collapsed="sidebarCollapsed"
      @toggle-sidebar="toggleSidebar"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MenuItem from '@/components/layout/MenuItem.vue';
import SidebarFooter from '@/components/layout/SidebarFooter.vue';

const activeMenuItem = ref('candidates');
const sidebarCollapsed = ref(false);

const menuItems = ref([
  { id: 'jobs', text: 'Jobs', iconClass: 'icon-sidebar-jobs' },
  { id: 'candidates', text: 'Candidates', iconClass: 'icon-sidebar-candidates' },
  { id: 'schedule', text: 'Schedule', iconClass: 'icon-sidebar-schedule' },
  { id: 'talent-pool', text: 'Talent pool', iconClass: 'icon-sidebar-talent-pool' },
  { id: 'recruitment-campaign', text: 'Recruitment campaign', iconClass: 'icon-sidebar-recruitment-campaign' },
  { id: 'tasks', text: 'Tasks', iconClass: 'icon-sidebar-tasks' },
  { id: 'ai-marketing', text: 'aiMarketing', iconClass: 'icon-ai-marketing' },
  { id: 'communication', text: 'Communication with candidate', iconClass: 'icon-communication' },
  { id: 'reports', text: 'Report', iconClass: 'icon-reports' },
  { id: 'settings', text: 'Settings', iconClass: 'icon-sidebar-settings' },
  { id: 'useful-knowledge', text: 'Useful knowledge', iconClass: 'icon-knowledge-header-right' }
]);

const handleMenuClick = (item) => {
  activeMenuItem.value = item.id;
  console.log('Menu clicked:', item);
  // Implement navigation logic here
};

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
  console.log('Sidebar toggled:', sidebarCollapsed.value);
  // Implement sidebar toggle logic here
};
</script>
