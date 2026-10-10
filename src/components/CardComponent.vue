<template>
  <article class="card">
    <img v-if="image" :src="image" alt="" class="card-image" loading="lazy" />
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p v-if="description" class="card-description">{{ description }}</p>
      <ul v-if="tech.length" class="tech-list" :aria-label="t('card.technologies')">
        <li v-for="item in tech" :key="item">{{ item }}</li>
      </ul>
      <div class="links">
        <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">{{
          t('card.liveDemo')
        }}</a>
        <a v-if="repo" :href="repo" target="_blank" rel="noopener noreferrer">{{
          t('card.sourceCode')
        }}</a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useI18n } from '../i18n/index.js';

const { t } = useI18n();

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  tech: { type: Array, default: () => [] },
  link: { type: String, default: '' },
  repo: { type: String, default: '' },
});
</script>

<style scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(30, 144, 255, 0.3);
}
.card-image {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
}
.card-title {
  margin: 0;
  font-size: 1.15em;
  color: var(--color-text-strong);
}
.card-description {
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

@media (prefers-reduced-motion: reduce) {
  .card,
  .card:hover {
    transition: none;
    transform: none;
  }
}
</style>
