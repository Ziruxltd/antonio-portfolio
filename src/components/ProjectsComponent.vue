<template>
  <div>
    <h2 class="section-title">Projects</h2>
    <ul class="projects-grid">
      <li v-for="project in projects" :key="project.name" class="project-card">
        <h3>{{ project.name }}</h3>
        <p class="description">{{ project.description }}</p>
        <ul class="tech-list" aria-label="Technologies">
          <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
        </ul>
        <div class="links">
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
            >Live demo</a
          >
          <a :href="project.repo" target="_blank" rel="noopener noreferrer">Source code</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
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
.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}
h3 {
  margin: 0;
  font-size: 1.15em;
  color: var(--color-text-strong);
}
.description {
  margin: 0;
  flex: 1;
  font-size: max(0.8em, 0.9rem);
}
.tech-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tech-list li {
  font-size: max(0.65em, 0.75rem);
  padding: 0.15em 0.6em;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
}
.links {
  display: flex;
  gap: 1rem;
  font-size: max(0.75em, 0.875rem);
  font-weight: 600;
}
.links a {
  color: var(--color-text);
}
.links a:hover {
  color: var(--color-text-strong);
}
</style>
