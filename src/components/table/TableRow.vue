<template>
  <tr>
    <td class="col-checkbox">
      <input type="checkbox" :checked="isSelected" @change="$emit('toggle-select', item)" />
    </td>
    <td v-for="col in columns" :key="col.key" :class="col.class">
      <slot :name="col.key" :item="item">
        {{ item[col.key] }}
      </slot>
    </td>
    <td class="col-actions">
      <div class="action-buttons commons-flex-center">
        <button
          class="action-btn edit-btn commons-border-none commons-bg-transparent commons-pointer"
          @click="$emit('edit', item)"
        >
          <span class="icon-edit"></span>
        </button>
        <button
          class="action-btn delete-btn commons-border-none commons-bg-transparent commons-pointer"
          @click="$emit('delete', item)"
        >
          <span class="icon-delete"></span>
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle-select', 'edit', 'delete'])
</script>

<style scoped>
.action-buttons {
  opacity: 0;
  transition: opacity 0.2s;
}

tr:hover .action-buttons {
  opacity: 1;
}

.action-btn {
  padding: 4px;
  margin: 0 2px;
}
</style>
