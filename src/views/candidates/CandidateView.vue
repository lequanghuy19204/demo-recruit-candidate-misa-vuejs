<template>
  <!-- Main content area -->
  <div class="main-content commons-flex-1 commons-overflow-hidden commons-flex-col">
    <!-- Header Section -->
    <div class="content-header commons-flex-between">
      <h1 class="page-title commons-fs-20 commons-fw-700">Candidates</h1>
      <div class="header-actions commons-display-flex">
        <BaseButton
          text="Add candidate"
          icon="icon-add-candidate"
          variant="primary"
          custom-class="btn-add-candidate"
          @click="openAddCandidateModal"
        />
        <BaseButton icon="icon-down" variant="primary" custom-class="btn-dropdown" />
      </div>
    </div>

    <!-- Filter Section -->
    <div class="filter-section commons-flex-between commons-bg-white">
      <BaseInput
        placeholder="Quick Search or AI Assistant"
        icon="icon-ai-search-candidate"
        wrapper-class="search-box commons-bg-white"
      />
      <div class="filter-actions commons-display-flex">
        <BaseButton icon="icon-filter" variant="secondary" custom-class="filter-btn" />
        <BaseButton icon="icon-export" variant="secondary" custom-class="filter-btn" />
        <BaseButton icon="icon-interactive-history" variant="secondary" custom-class="filter-btn" />
        <BaseButton icon="icon-setting-column" variant="secondary" custom-class="filter-btn" />
      </div>
    </div>

    <!-- Selection Toolbar (hidden by default) -->
    <div class="selection-toolbar commons-flex-between commons-bg-white">
      <div class="selection-info commons-flex-center">
        <span class="selection-count commons-fw-700">0</span>
        <span class="selection-text commons-fs-14">selecting</span>
        <a class="selection-deselect commons-pointer commons-fs-14">Deselect</a>
        <a class="selection-select-all commons-pointer commons-fs-14">Select all on the list</a>
      </div>
      <div class="selection-actions commons-flex-center">
        <BaseButton
          text="Send email"
          icon="icon-email"
          variant="ghost"
          custom-class="toolbar-btn"
        />
        <BaseButton text="Manage tag" icon="icon-tag" variant="ghost" custom-class="toolbar-btn" />
        <BaseButton
          text="Create task"
          icon="icon-task"
          variant="ghost"
          custom-class="toolbar-btn"
        />
        <BaseButton
          text="Add to campaign"
          icon="icon-campaign"
          variant="ghost"
          custom-class="toolbar-btn"
        />
        <BaseButton
          text="Delete"
          icon="icon-delete"
          variant="ghost"
          custom-class="toolbar-btn toolbar-btn-delete"
        />
      </div>
    </div>

    <!-- Table Section -->
    <div class="table-container commons-flex-1 commons-overflow-hidden commons-flex-col">
      <div class="table-wrapper commons-flex-1 commons-overflow-auto">
        <table class="candidates-table commons-w-full commons-fs-14">
          <TableHeader :columns="columns" @select-all="handleSelectAll" />
          <tbody>
            <TableRow
              v-for="candidate in candidates"
              :key="candidate.id"
              :item="candidate"
              :columns="columns"
              :is-selected="selectedCandidates.includes(candidate.id)"
              @toggle-select="handleToggleSelect"
              @edit="handleEdit"
              @delete="handleDelete"
            />
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination Section -->
    <TablePagination
      :total-records="totalRecords"
      v-model:page-size="pageSize"
      :current-page="currentPage"
      @prev-page="handlePrevPage"
      @next-page="handleNextPage"
    />

    <!-- Add Candidate Modal -->
    <CandidateForm
      v-if="showAddCandidateModal"
      @close="closeAddCandidateModal"
      @save="handleSaveCandidate"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseInput from '@/components/common/BaseInput.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import TableRow from '@/components/table/TableRow.vue'
import TablePagination from '@/components/table/TablePagination.vue'
import CandidateForm from './CandidateForm.vue'

const showAddCandidateModal = ref(false)
const candidates = ref([])
const selectedCandidates = ref([])
const totalRecords = ref(0)
const pageSize = ref(25)
const currentPage = ref(1)

const columns = [
  { key: 'fullName', label: 'Full name', class: 'col-fullname' },
  { key: 'email', label: 'Email', class: 'col-email' },
  { key: 'phone', label: 'Phone number', class: 'col-phone' },
  { key: 'campaign', label: 'Recruitment campaign', class: 'col-campaign' },
  { key: 'position', label: 'Recruiting position', class: 'col-position' },
  { key: 'jobs', label: 'Jobs', class: 'col-jobs' },
  { key: 'round', label: 'Recruitment round', class: 'col-round' },
  { key: 'review', label: 'Review', class: 'col-review' },
  { key: 'appDate', label: 'Application date', class: 'col-appdate' },
  { key: 'source', label: 'Candidate source', class: 'col-source' },
  { key: 'training', label: 'Training level', class: 'col-training' },
  { key: 'place', label: 'Training place', class: 'col-place' },
  { key: 'major', label: 'Major', class: 'col-major' },
  { key: 'workplace', label: 'Recent Workplace', class: 'col-workplace' },
  { key: 'recommend', label: 'Recommending staff', class: 'col-recommend' },
  { key: 'department', label: 'Using department', class: 'col-department' },
  { key: 'compat', label: 'Compatibility level', class: 'col-compat' },
  { key: 'area', label: 'Area', class: 'col-area' },
  { key: 'referral', label: 'Referral', class: 'col-referral' },
  { key: 'receipt', label: 'Receipt information', class: 'col-receipt' },
  { key: 'talent', label: 'In talent pool', class: 'col-talent' },
  { key: 'portal', label: 'Candidate portal account', class: 'col-portal' },
  { key: 'tag', label: 'Tag', class: 'col-tag' },
  { key: 'status', label: 'Status', class: 'col-status' },
  { key: 'sex', label: 'Sex', class: 'col-sex' },
  { key: 'dob', label: 'Date of birth', class: 'col-dob' },
  { key: 'address', label: 'Address', class: 'col-address' },
  { key: 'reason', label: 'Reason', class: 'col-reason' },
  { key: 'collab', label: 'Collaborators', class: 'col-collab' },
  { key: 'receiptDate', label: 'Receipt date', class: 'col-receiptdate' },
  { key: 'offer', label: 'Job offer status', class: 'col-offer' },
]

const handleSelectAll = (checked) => {
  if (checked) {
    selectedCandidates.value = candidates.value.map((c) => c.id)
  } else {
    selectedCandidates.value = []
  }
}

const handleToggleSelect = (item) => {
  const index = selectedCandidates.value.indexOf(item.id)
  if (index === -1) {
    selectedCandidates.value.push(item.id)
  } else {
    selectedCandidates.value.splice(index, 1)
  }
}

const handleEdit = (item) => {
  console.log('Edit', item)
}

const handleDelete = (item) => {
  console.log('Delete', item)
}

const handlePrevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const handleNextPage = () => {
  currentPage.value++
}

const openAddCandidateModal = () => {
  showAddCandidateModal.value = true
}

const closeAddCandidateModal = () => {
  showAddCandidateModal.value = false
}

const handleSaveCandidate = (formData) => {
  const newCandidate = {
    id: Date.now(),
    ...formData,
    appDate: formData.applicationDate,
    source: formData.candidateSource,
    status: 'Pending',
  }

  candidates.value.unshift(newCandidate)
  totalRecords.value++
  console.log('Saved candidate:', newCandidate)
}
</script>
