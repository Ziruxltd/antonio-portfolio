<template>
  <footer class="footer">
    <hr />
    <span>{{ t('footer.builtWith') }} &mdash; {{ t('footer.version') }} {{ version }}</span>
  </footer>
</template>

<script setup>
import { useI18n } from '../i18n/index.js';

const { t } = useI18n();

// Injected at build time from package.json (see rsbuild.config.mjs).
const version = __APP_VERSION__;
</script>

<style scoped>
.footer {
  color: var(--color-text-strong);
  padding: 1rem;
  text-align: center;
  font-size: 0.95rem;
  width: 100%;
}
hr {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 0 auto 10px;
  max-width: 60%;
}
</style>
