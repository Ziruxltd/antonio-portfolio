<template>
  <div class="page">
    <HeaderComponent v-model="headerOptions" @clickOption="handleHeaderClick" />
    <main class="content">
      <section id="about">
        <AboutComponent />
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import { ref } from 'vue';

const headerOptions = ref([
  { name: 'About', id: 'about', selected: true },
  { name: 'Projects', id: 'projects', selected: false },
  { name: 'Contact', id: 'contact', selected: false },
]);

function handleHeaderClick(option) {
  const element = document.querySelector(`#${option.id}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
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