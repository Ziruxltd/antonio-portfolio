<template>
  <div class="about-section">
    <div class="profile-content">
      <div class="info-container">
        <h1>Antonio Jaramillo Fanta</h1>
        <h2>Web Developer</h2>
        <div class="buttons-container">
          <button
            v-for="button in buttons"
            :key="button.id"
            :class="button.img ? 'btn-logo action-button' : 'action-button'"
            @click="button.action"
          >
            <img v-if="button.img" :src="button.img" :alt="button.label" class="button-icon" />
            <span>
              {{ button.label }}
            </span>
            <span v-if="button.icon" class="material-symbols-outlined">{{ button.icon }}</span>
          </button>
        </div>
      </div>
      <div class="image-container">
        <img src="/antonio-profile.webp" alt="Imagen de perfil" class="profile-image" />
      </div>
    </div>
    <article>
      <p class="about-text">
        I am a web developer specialized in frontend with 3 years of experience, having worked with both entrepreneurs and large companies. I am a quick learner: during this time I have mastered technologies such as Vue.js, React, Lit Elements, Playwright, and Electron.js. Coming from a sports background, I know how to identify my role within a team and contribute to a positive work environment. I am driven by continuous learning and exploring new ways to solve problems, with the goal of growing and becoming a better programmer.
      </p>
    </article>
    <div class="skills-container">
      <h2>Skills</h2>
      <div class="chips">
        <ChipComponent v-for="skill in skills" :key="skill.id" :label="skill.label" :icon="skill.icon" />
      </div>
      
    </div>
  </div>
</template>

<script setup>
import ChipComponent from '../components/ChipComponent.vue';

const buttons = [
  { id: 1, label: 'Download CV', icon: 'Download', action: () => window.open('/cv.pdf') },
  { id: 2, img: '/icons/github-icon.svg', action: () => window.open('https://github.com/Ziruxltd', '_blank') },
  { id: 3, img: '/icons/linkedin-icon.png', action: () => window.open('https://www.linkedin.com/in/antonio-jaramillo-fanta/', '_blank') },
];

const skills = [
  { id: 1, label: 'JavaScript', icon: '/icons/javascript-icon.png' },
  { id: 2, label: 'TypeScript', icon: '/icons/typescript-icon.png' },
  { id: 3, label: 'Vue.js', icon: '/icons/vue-icon.png' },
  { id: 4, label: 'React', icon: '/icons/react-icon.svg' },
  { id: 5, label: 'HTML5', icon: '/icons/html-icon.png' },
  { id: 6, label: 'CSS3', icon: '/icons/css-icon.png' },
  { id: 7, label: 'Sass' },
  { id: 8, label: 'Git', icon: '/icons/github-icon.svg' },
  { id: 9, label: 'Node.js', icon: '/icons/node-icon.png' },
  { id: 10, label: 'Electron.js', icon: '/icons/electronjs-icon.png' },
  { id: 11, label: 'Playwright', icon: '/icons/playwright-icon.png' },
  { id: 12, label: 'Lit', icon: '/icons/lit-icon.png' }
];
</script>

<style scoped>
.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #d9d8dd;
}
h1 {
  margin: 0;
  padding: 0;
  font-size: 1.75em;
}
h2 {
  margin: 0;
  padding: 0;
  font-size: 1em;
}
.about-text {
  color: #d9d8dd;
  background-color: #2c2c30;
  padding: 20px;
  border-radius: 12px;
  font-weight: normal;
}
.info-container {
  max-width: 60%;
  text-align: left;
  padding: 20px 20px 20px 0;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-image {
  width: 500px;
  height: 600px;
  border-radius: 12px;
  object-fit: cover;
}
.buttons-container {
  margin-top: 20px;
  display: flex;
  gap: 15px;
}
.action-button {
  cursor: pointer;
  margin: 0;
  border: 3px solid #888;
  border-radius: 12px;
  padding: 10px;
  height: 75px;
  object-fit: cover;
  background-color: transparent;
  color: #d9d8dd;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 10px;
}
.btn-logo {
  width: 75px;
}
.action-button:hover {
  border-color: #d9d8dd;
  color: #fff;
}
.button-icon {
  margin: 0;
  height: 100%;
}
.skills-container {
  margin-top: 30px;
  text-align: left;
}
.chips {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 1200px) {
  .profile-content {
    flex-direction: column;
    align-items: center;
  }
  .info-container {
    max-width: 100%;
    text-align: center;
  }
  .image-container {
    max-width: 100%;
  }
  .profile-image {
    width: 100%;
    height: auto;
  }
  .buttons-container {
    justify-content: center;
  }
  .about-text {
    font-size: 0.8em;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 0.85em;
  }
  .action-button {
    height: 50px;
    font-size: 0.6em;
    padding: 8;
  }
  .btn-logo {
    width: 50px;
  }
  .about-text {
    font-size: 0.7em;
  }
}

</style>