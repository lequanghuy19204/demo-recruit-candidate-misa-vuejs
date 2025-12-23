<template>
  <div class="table-container commons-flex-1 commons-overflow-hidden commons-flex-col">
    <!-- Table Wrapper -->
    <div class="table-wrapper commons-flex-1 commons-overflow-auto">
      <table class="candidates-table commons-w-full commons-fs-14">
        <!-- Table Header -->
        <thead>
          <tr>
            <th v-if="selectable" class="col-checkbox">
              <input
                type="checkbox"
                :checked="isAllSelected"
                :indeterminate="isIndeterminate"
                @change="handleSelectAll"
              />
            </th>
            <th
              v-for="col in columns"
              :key="col.key"
              :class="[col.class, 'commons-fw-700 commons-text-left commons-text-nowrap']"
            >
              {{ col.label }}
            </th>
            <th v-if="showActions" class="col-actions"></th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
          <tr v-for="item in paginatedData" :key="getItemKey(item)">
            <td v-if="selectable" class="col-checkbox">
              <input
                type="checkbox"
                :checked="isItemSelected(item)"
                @change="handleToggleSelect(item)"
              />
            </td>
            <td v-for="col in columns" :key="col.key" :class="col.class">
              <slot :name="col.key" :item="item" :value="item[col.key]">
                {{ item[col.key] }}
              </slot>
            </td>
            <td v-if="showActions" class="col-actions">
              <div class="action-buttons commons-flex-center">
                <slot name="actions" :item="item">
                  <button
                    v-if="showEdit"
                    class="action-btn-edit commons-border-none commons-bg-transparent commons-pointer"
                    @click="handleEdit(item)"
                  >
                    <span class="icon-edit"></span>
                  </button>
                  <button
                    v-if="showDelete"
                    class="action-btn-delete commons-border-none commons-bg-transparent commons-pointer"
                    @click="handleDelete(item)"
                  >
                    <span class="icon-delete"></span>
                  </button>
                </slot>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="showPagination" class="pagination-section commons-flex-between">
      <div class="total-records commons-fs-14">
        Total: <strong>{{ totalRecords }}</strong> record
      </div>
      <div class="pagination-controls commons-flex-center">
        <span class="records-label commons-fs-14">Number of records/page</span>
        <BaseSelect
          :model-value="internalPageSize"
          :options="pageSizeOptions"
          @update:model-value="handlePageSizeChange"
        />
        <span class="page-info commons-fs-14">{{ startRecord }} - {{ endRecord }} record</span>
        <BaseButton
          icon="icon-left"
          variant="icon-only"
          custom-class="page-btn prev"
          :disabled="internalCurrentPage === 1"
          @click="handlePrevPage"
        />
        <BaseButton
          icon="icon-right"
          variant="icon-only"
          custom-class="page-btn next"
          :disabled="internalCurrentPage === totalPages"
          @click="handleNextPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
    validator: (value) => Array.isArray(value),
  },
  columns: {
    type: Array,
    required: true,
    validator: (value) => {
      return (
        Array.isArray(value) &&
        value.every((col) => col.key && col.label && typeof col.key === 'string')
      )
    },
  },
  selectable: {
    type: Boolean,
    default: false,
  },
  selectedItems: {
    type: Array,
    default: () => [],
  },
  showActions: {
    type: Boolean,
    default: true,
  },
  showEdit: {
    type: Boolean,
    default: true,
  },
  showDelete: {
    type: Boolean,
    default: true,
  },
  showPagination: {
    type: Boolean,
    default: true,
  },
  pageSize: {
    type: [Number, String],
    default: 25,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSizeOptions: {
    type: Array,
    default: () => [
      { label: '25', value: 25 },
      { label: '50', value: 50 },
      { label: '100', value: 100 },
    ],
  },
  itemKey: {
    type: String,
    default: 'id',
  },
})

const emit = defineEmits([
  'select-all',
  'toggle-select',
  'edit',
  'delete',
  'update:pageSize',
  'update:currentPage',
  'prev-page',
  'next-page',
])

const internalPageSize = ref(props.pageSize)
const internalCurrentPage = ref(props.currentPage)

watch(
  () => props.pageSize,
  (newValue) => {
    internalPageSize.value = newValue
  },
)

watch(
  () => props.currentPage,
  (newValue) => {
    internalCurrentPage.value = newValue
  },
)

const totalRecords = computed(() => props.data.length)

const totalPages = computed(() => Math.ceil(totalRecords.value / Number(internalPageSize.value)))

const startRecord = computed(() => {
  if (totalRecords.value === 0) return 0
  return (internalCurrentPage.value - 1) * Number(internalPageSize.value) + 1
})

const endRecord = computed(() =>
  Math.min(internalCurrentPage.value * Number(internalPageSize.value), totalRecords.value),
)

const paginatedData = computed(() => {
  if (!props.showPagination) {
    return props.data
  }
  const start = startRecord.value - 1
  const end = endRecord.value
  return props.data.slice(start, end)
})

const isAllSelected = computed(() => {
  if (!props.selectable || props.data.length === 0) return false
  return props.data.every((item) => isItemSelected(item))
})

const isIndeterminate = computed(() => {
  if (!props.selectable || props.data.length === 0) return false
  const selectedCount = props.data.filter((item) => isItemSelected(item)).length
  return selectedCount > 0 && selectedCount < props.data.length
})

const getItemKey = (item) => {
  return item[props.itemKey]
}

const isItemSelected = (item) => {
  const itemKey = getItemKey(item)
  return props.selectedItems.some((selectedItem) => {
    return typeof selectedItem === 'object'
      ? getItemKey(selectedItem) === itemKey
      : selectedItem === itemKey
  })
}

const handleSelectAll = (event) => {
  emit('select-all', event.target.checked)
}

const handleToggleSelect = (item) => {
  emit('toggle-select', item)
}

const handleEdit = (item) => {
  emit('edit', item)
}

const handleDelete = (item) => {
  emit('delete', item)
}

const handlePageSizeChange = (newSize) => {
  internalPageSize.value = newSize
  internalCurrentPage.value = 1
  emit('update:pageSize', newSize)
  emit('update:currentPage', 1)
}

const handlePrevPage = () => {
  if (internalCurrentPage.value > 1) {
    internalCurrentPage.value--
    emit('update:currentPage', internalCurrentPage.value)
    emit('prev-page')
  }
}

const handleNextPage = () => {
  if (internalCurrentPage.value < totalPages.value) {
    internalCurrentPage.value++
    emit('update:currentPage', internalCurrentPage.value)
    emit('next-page')
  }
}
</script>
