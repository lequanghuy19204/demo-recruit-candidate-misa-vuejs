<template>
  <thead>
    <tr>
      <th class="col-checkbox">
        <input type="checkbox" @change="$emit('select-all', $event.target.checked)" />
      </th>
      <th
        v-for="col in columns"
        :key="col.key"
        :class="[col.class, 'commons-fw-700 commons-text-left commons-text-nowrap']"
      >
        {{ col.label }}
      </th>
      <th class="col-actions"></th>
    </tr>
  </thead>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true,
  },
})

defineEmits(['select-all'])
</script>
