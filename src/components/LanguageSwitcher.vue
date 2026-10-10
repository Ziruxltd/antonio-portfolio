<template>
  <div ref="root" class="lang-switcher" @keydown.esc="close">
    <button
      type="button"
      class="lang-current"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-label="`${t('lang.change')} (${current.name})`"
      :title="current.name"
      @click="open = !open"
    >
      <img :src="current.flag" alt="" class="flag" />
    </button>
    <ul v-if="open" class="lang-options" role="listbox" :aria-label="t('lang.change')">
      <li
        v-for="option in LOCALES"
        :key="option.code"
        role="option"
        :aria-selected="option.code === locale"
      >
        <button
          type="button"
          :class="{ selected: option.code === locale }"
          :aria-label="option.name"
          :title="option.name"
          :lang="option.htmlLang"
          @click="choose(option.code)"
        >
          <img :src="option.flag" alt="" class="flag" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from '../i18n/index.js';

const { locale, setLocale, t, LOCALES } = useI18n();

const open = ref(false);
const root = ref(null);
const current = computed(() => LOCALES.find((l) => l.code === locale.value));

function close() {
  open.value = false;
}

function choose(code) {
  setLocale(code);
  close();
}

function onDocumentClick(event) {
  if (!root.value?.contains(event.target)) close();
}

onMounted(() => document.addEventListener('click', onDocumentClick));
onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick));
</script>

<style scoped>
.lang-switcher {
  position: relative;
}
.lang-current,
.lang-options {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.5rem;
  background: none;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
}
.lang-current {
  padding: 0.6rem 0.7rem;
}
.lang-current:hover,
.lang-options button:hover {
  border-color: var(--color-border-strong);
}
.lang-options {
  position: absolute;
  top: calc(100% + 0.4rem);
  right: 0;
  list-style: none;
  margin: 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.lang-options button.selected {
  border-color: var(--color-text);
}
.flag {
  display: block;
  width: 32px;
  height: 21px;
  object-fit: cover;
  border-radius: 3px;
}

@media (max-width: 600px) {
  .lang-current {
    padding: 0.5rem;
  }
  .flag {
    width: 26px;
    height: 17px;
  }
}
</style>
