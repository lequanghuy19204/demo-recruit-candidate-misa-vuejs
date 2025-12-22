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

    <!-- Filter Section - Show when no candidates selected -->
    <div
      v-if="selectedCandidates.length === 0"
      class="filter-section commons-flex-between commons-bg-white"
    >
      <BaseInput
        v-model="searchQuery"
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

    <!-- Selection Toolbar - Show when candidates selected -->
    <div
      v-if="selectedCandidates.length > 0"
      class="selection-toolbar commons-flex-between commons-bg-white"
    >
      <div class="selection-info commons-flex-center">
        <span class="selection-count commons-fw-700">{{ selectedCandidates.length }}</span>
        <span class="selection-text commons-fs-14">selecting</span>
        <a class="selection-deselect commons-pointer commons-fs-14" @click="handleDeselectAll"
          >Deselect</a
        >
        <a class="selection-select-all commons-pointer commons-fs-14" @click="handleSelectAllOnList"
          >Select all on the list</a
        >
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
          icon="icon-delete-20"
          variant="ghost"
          custom-class="toolbar-btn toolbar-btn-delete"
          @click="handleDeleteSelected"
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
              v-for="candidate in filteredCandidates"
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
      :total-records="filteredCandidates.length"
      v-model:page-size="pageSize"
      :current-page="currentPage"
      @prev-page="handlePrevPage"
      @next-page="handleNextPage"
    />

    <!-- Add Candidate Modal -->
    <CandidateForm
      v-if="showAddCandidateModal"
      :candidate="editingCandidate"
      :is-edit-mode="isEditMode"
      @close="closeAddCandidateModal"
      @save="handleSaveCandidate"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseInput from '@/components/common/BaseInput.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import TableRow from '@/components/table/TableRow.vue'
import TablePagination from '@/components/table/TablePagination.vue'
import CandidateForm from './CandidateForm.vue'
import {
  getCandidatesFromStorage,
  addCandidateToStorage,
  updateCandidateInStorage,
  deleteCandidateFromStorage,
} from '@/utils/localStorage'

const showAddCandidateModal = ref(false)
const candidates = ref([])
const selectedCandidates = ref([])
const searchQuery = ref('')
const totalRecords = ref(0)
const pageSize = ref(25)
const currentPage = ref(1)
const editingCandidate = ref(null)
const isEditMode = ref(false)

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

// Filter candidates based on search query across all columns
const filteredCandidates = computed(() => {
  if (!searchQuery.value.trim()) {
    return candidates.value
  }

  const query = searchQuery.value.toLowerCase().trim()

  return candidates.value.filter((candidate) => {
    // Search across all column values
    return Object.values(candidate).some((value) => {
      if (value == null) return false
      return String(value).toLowerCase().includes(query)
    })
  })
})

onMounted(() => {
  loadCandidates()
})

const loadCandidates = () => {
  candidates.value = getCandidatesFromStorage()
  totalRecords.value = candidates.value.length
}

const handleSelectAll = (checked) => {
  if (checked) {
    selectedCandidates.value = filteredCandidates.value.map((c) => c.id)
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
  editingCandidate.value = {
    ...item,
    dateOfBirth: item.dob,
    applicationDate: item.appDate,
    gender: item.sex,
    candidateSource: item.source,
    jobPosition: item.position,
    recentWorkplace: item.workplace,
    recommendingStaff: item.recommend,
    collaborators: item.collab,
    trainingLevel: item.training,
    trainingPlace: item.place,
    major: item.major,
  }
  isEditMode.value = true
  showAddCandidateModal.value = true
}

const handleDelete = (item) => {
  if (confirm(`Are you sure you want to delete the candidate "${item.fullName}"?`)) {
    deleteCandidateFromStorage(item.id)
    // Remove from selected if it was selected
    const index = selectedCandidates.value.indexOf(item.id)
    if (index !== -1) {
      selectedCandidates.value.splice(index, 1)
    }
    loadCandidates()
    console.log('Deleted candidate:', item)
  }
}

const handleDeselectAll = () => {
  selectedCandidates.value = []
}

const handleSelectAllOnList = () => {
  selectedCandidates.value = filteredCandidates.value.map((c) => c.id)
}

const handleDeleteSelected = () => {
  if (selectedCandidates.value.length === 0) return

  const count = selectedCandidates.value.length
  if (confirm(`Are you sure you want to delete ${count} selected candidate(s)?`)) {
    selectedCandidates.value.forEach((id) => {
      deleteCandidateFromStorage(id)
    })
    selectedCandidates.value = []
    loadCandidates()
  }
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
  editingCandidate.value = null
  isEditMode.value = false
  showAddCandidateModal.value = true
}

const closeAddCandidateModal = () => {
  showAddCandidateModal.value = false
}

const handleSaveCandidate = (formData) => {
  const candidateData = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    campaign: '',
    position: formData.jobPosition,
    jobs: '',
    round: '',
    review: '',
    appDate: formData.applicationDate,
    source: formData.candidateSource,
    training: formData.trainingLevel,
    place: formData.trainingPlace,
    major: formData.major,
    workplace: formData.recentWorkplace,
    recommend: formData.recommendingStaff,
    department: '',
    compat: '',
    area: formData.area,
    referral: '',
    receipt: '',
    talent: '',
    portal: '',
    tag: '',
    status: 'Pending',
    sex: formData.gender,
    dob: formData.dateOfBirth,
    address: formData.address,
    reason: '',
    collab: formData.collaborators,
    receiptDate: '',
    offer: '',
    timeFrom: formData.timeFrom,
    timeTo: formData.timeTo,
    taskDescription: formData.taskDescription,
    cvFile: formData.cvFile,
  }

  if (isEditMode.value && formData.id) {
    updateCandidateInStorage(formData.id, candidateData)
  } else {
    addCandidateToStorage(candidateData)
  }

  loadCandidates()
}
</script>
