<template>
  <div :class="link ? 'card card-link' : 'card'" @click="handleCLick(link)">
    <img v-if="image" :src="image" :alt="title" class="card-image" />
    <div class="card-content">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <p v-if="description" class="card-description">{{ description }}</p>
    </div>
    
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: String,
  title: String,
  description: String,
  link: String
});

function handleCLick(link) {
  if (link) {
    window.open(link, '_blank');
  }
}
</script>

<style scoped>
.card {
  background-color: #2c2c30;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: left;
}
.card-link {
  cursor: pointer;
}
.card-link:hover {
  box-shadow: 0 6px 12px rgba(30, 144, 255, 0.3);
  transform: translateY(-2px);
  transition: all 0.3s ease;
} 
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 15px;
}
.card-title {
  margin: 0 0 10px 0;
  font-size: 1.5em;
  color: #d9d8dd;
}
.card-description {
  font-size: 1em;
  color: #b0b0b5;
  margin-bottom: 15px;
  font-weight: normal;
}
.card-link {
  text-decoration: none;
  color: #1e90ff;
  font-weight: bold;
}
</style>