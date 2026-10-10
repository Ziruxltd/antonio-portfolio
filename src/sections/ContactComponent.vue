<template>
  <div class="contact">
    <h2 class="section-title">{{ t('contact.title') }}</h2>
    <p>{{ t('contact.text') }}</p>
    <ul class="contact-links">
      <li v-for="link in links" :key="link.label">
        <a
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          >{{ link.label }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { profile } from '../data/profile.js';
import { useI18n } from '../i18n/index.js';

const { t } = useI18n();

const links = computed(() =>
  [
    profile.email && { label: t('contact.email'), href: `mailto:${profile.email}` },
    { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'GitHub', href: profile.github, external: true },
  ].filter(Boolean),
);
</script>

<style scoped>
.section-title {
  margin: 0 0 1rem;
  font-size: 2rem;
  color: var(--color-text-strong);
}
p {
  margin: 0 0 1.5rem;
}
.contact-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.contact-links a {
  display: inline-block;
  padding: 0.5em 1.25em;
  border: 3px solid var(--color-border-strong);
  border-radius: var(--radius);
  color: var(--color-text);
  font-weight: 600;
  text-decoration: none;
}
.contact-links a:hover {
  border-color: var(--color-text);
  color: var(--color-text-strong);
}
</style>
