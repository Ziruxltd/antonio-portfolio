<template>
  <div class="page">
    <HeaderComponent :sections="sections" :active-id="activeId" />
    <main class="content">
      <section v-for="section in sections" :id="section.id" :key="section.id" class="section">
        <component :is="section.component" />
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import ContactComponent from './components/ContactComponent.vue';

const sections = [
  { name: 'About', id: 'about', component: AboutComponent },
  { name: 'Projects', id: 'projects', component: ProjectsComponent },
  { name: 'Contact', id: 'contact', component: ContactComponent },
];

const activeId = ref(sections[0].id);
let observer;

onMounted(() => {
  // Marks as active the section crossing the middle of the viewport.
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) activeId.value = visible.target.id;
    },
    { rootMargin: '-50% 0px -50% 0px' },
  );
  sections.forEach(({ id }) => observer.observe(document.getElementById(id)));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--color-text);
  padding-top: var(--header-height);
  width: 100%;
  overflow-x: hidden;
}

.content {
  flex: 1;
  padding: 3rem 5%;
  width: 100%;
  max-width: 1500px;
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 0 auto;
}

.section {
  scroll-margin-top: var(--header-height);
}

.section + .section {
  margin-top: 5rem;
}

@media (max-width: 1200px) {
  .content {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .content {
    font-size: 1rem;
  }
}
</style>
