<template>
  <div class="chip">
    <img v-if="icon" :src="icon" alt="" class="chip-icon" />
    <span class="chip-label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 52px;
  background-color: var(--color-border);
  color: var(--color-text-strong);
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.875em;
}
.chip-icon {
  width: 42px;
  height: 42px;
  object-fit: contain;
}
.chip-label {
  font-weight: 500;
}
</style>
