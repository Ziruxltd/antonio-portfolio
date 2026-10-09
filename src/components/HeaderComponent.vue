<template>
  <header>
    <nav aria-label="Main">
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a
            :href="`#${section.id}`"
            :class="{ selected: section.id === activeId }"
            :aria-current="section.id === activeId ? 'location' : undefined"
            >{{ section.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true,
  },
  activeId: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
header {
  padding: 0.75rem 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
}
nav ul {
  background-color: var(--color-surface);
  max-width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 5px 10px;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
}
nav ul li {
  margin: 0 0.3rem;
  display: flex;
  align-items: center;
}
nav ul li a {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.15em 0.3em;
  border: 1px solid transparent;
  border-radius: 6px;
}
nav ul li a:hover {
  color: var(--color-text);
}
nav ul li a.selected {
  color: var(--color-surface);
  font-weight: 700;
  background-color: var(--color-text);
  border-color: var(--color-border);
}

@media (max-width: 600px) {
  nav ul {
    gap: 0.25rem;
    padding: 0 5px;
  }
  nav ul li {
    margin: 0.3rem 0;
  }
  nav ul li a {
    font-size: 1.2rem;
    padding: 0.3em 0.5em;
  }
}
</style>
