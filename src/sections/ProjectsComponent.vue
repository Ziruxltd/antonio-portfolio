<template>
  <div class="projects-container">
    <CardComponent
      class="project-card"
      v-for="project in projects"
      :key="project.id"
      :image="project.image"
      :title="project.title"
      :description="project.description"
      :link="project.link"
    />
  </div>
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue';

const projects = [
  {
    id: 1,
    image: '',
    title: 'Días de pensiones',
    description: 'A small project that helps raise awareness about the excessive spending on retirement pensions in Spain',
    link: 'https://diaspensiones.antoniojaramillo.dev'
  },
  {
    id: 2,
    image: '/wordclock.webp',
    title: 'Word Clock',
    description: 'A clock that displays the time in words instead of numbers.',
    link: 'https://wordclock.antoniojaramillo.dev'
  },
  {
    id: 3,
    image: '/game-of-life.webp',
    title: 'Game of Life',
    description: 'A simulation of Conway\'s Game of Life.',
    link: 'https://gameoflife.antoniojaramillo.dev'
  },
  {
    id: 4,
    image: '/advent-of-code.webp',
    title: 'Advent of Code',
    description: 'A collection of my solutions to the Advent of Code challenges using JavaScript.',
    link: 'https://github.com/Ziruxltd/Advent-of-code'
  }
];
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.project-card {
  flex: 1 1 calc(33.333% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.project-card:hover {
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .project-card {
    flex: 1 1 calc(50% - 20px);
  }
}
@media (max-width: 600px) {
  .project-card {
    flex: 1 1 100%;
  }
  .project-card:hover {
    transform: none;
  }
  .project-card:active {
    transform: scale(0.98);
  }
}

</style>