<template>
  <div>
    <h2 class="section-title">Projects</h2>
    <ul class="projects-grid">
      <li v-for="project in projects" :key="project.title">
        <CardComponent v-bind="project" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue';
import { projects } from '../data/projects.js';
</script>

<style scoped>
.section-title {
  margin: 0 0 1.5rem;
  font-size: 2rem;
  color: var(--color-text-strong);
}
.projects-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 1.5rem;
}
</style>
