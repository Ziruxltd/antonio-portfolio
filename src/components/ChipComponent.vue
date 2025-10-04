<template>
  <div class="chip">
    <span class="chip-icon" v-if="icon">
      <img :src="icon" alt="" />
    </span>
    <span class="chip-label">{{ label }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: null
  },
});
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  background-color: #444;
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.875em;
}
.chip-icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
}
.chip-icon img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}
.chip-label {
  font-weight: 500;
}
</style>