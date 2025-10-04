<template>
  <div class="page">
    <HeaderComponent v-model="headerOptions" @clickOption="handleHeaderClick" />
    <main class="content">
      <section id="about">
        <AboutComponent />
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ProjectsComponent />
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>If you want to get in touch, you can reach me via email at <a href="mailto:antoniojaramillofanta@gmail.com">antoniojaramillofanta@gmail.com</a>.</p>
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import AboutComponent from './sections/AboutComponent.vue';
import ProjectsComponent from './sections/ProjectsComponent.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';


let observer;

function setSelectedSection(id) {
  headerOptions.value.forEach(opt => {
    opt.selected = (opt.id === id);
  });
}

onMounted(() => {
  const sections = headerOptions.value.map(opt => document.getElementById(opt.id)).filter(Boolean);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: '-100px 0px 0px 0px',
      threshold: 0.5
    }
  );

  sections.forEach(section => observer.observe(section));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

const headerOptions = ref([
  { name: 'About', id: 'about', selected: true },
  { name: 'Projects', id: 'projects', selected: false },
  { name: 'Contact', id: 'contact', selected: false },
]);

function handleHeaderClick(option) {
  const element = document.querySelector(`#${option.id}`);
  if (element) {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  color: white;
  padding-top: 80px;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

.content {
  padding: 50px 5%;
  width: 100%;
  max-width: 1500px;
  text-align: justify;
  font-size: 0.5em;
  line-height: 1.6;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>