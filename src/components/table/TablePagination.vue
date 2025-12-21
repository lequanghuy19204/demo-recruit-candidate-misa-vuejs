<template>
  <div class="pagination-section commons-flex-between">
    <div class="total-records commons-fs-14">
      Total: <strong>{{ totalRecords }}</strong> record
    </div>
    <div class="pagination-controls commons-flex-center">
      <span class="records-label commons-fs-14">Number of records/page</span>
      <BaseSelect
        :model-value="pageSize"
        :options="pageSizeOptions"
        @update:model-value="$emit('update:pageSize', $event)"
      />
      <span class="page-info commons-fs-14">{{ startRecord }} - {{ endRecord }} record</span>
      <BaseButton
        icon="icon-left"
        variant="icon-only"
        custom-class="page-btn prev"
        :disabled="currentPage === 1"
        @click="$emit('prev-page')"
      />
      <BaseButton
        icon="icon-right"
        variant="icon-only"
        custom-class="page-btn next"
        :disabled="currentPage === totalPages"
        @click="$emit('next-page')"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseSelect from '@/components/common/BaseSelect.vue'

const props = defineProps({
  totalRecords: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: [Number, String],
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  pageSizeOptions: {
    type: Array,
    default: () => [
      { label: '25', value: 25 },
      { label: '50', value: 50 },
      { label: '100', value: 100 },
    ],
  },
})

defineEmits(['update:pageSize', 'prev-page', 'next-page'])

const totalPages = computed(() => Math.ceil(props.totalRecords / Number(props.pageSize)))
const startRecord = computed(() => (props.currentPage - 1) * Number(props.pageSize) + 1)
const endRecord = computed(() =>
  Math.min(props.currentPage * Number(props.pageSize), props.totalRecords),
)
</script>
