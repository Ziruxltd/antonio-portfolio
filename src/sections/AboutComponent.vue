<template>
  <div class="about-section">
    <div class="profile-content">
      <div class="info-container">
        <h1>{{ profile.name }}</h1>
        <h2>{{ t('about.role') }}</h2>
        <div class="buttons-container">
          <a class="action-button" :href="profile.cv" download="Antonio-Jaramillo-CV.pdf">
            <span>{{ t('about.downloadCv') }}</span>
            <svg class="download-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 16l-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5zm-6 4q-.8 0-1.4-.6T4 18v-3h2v3h12v-3h2v3q0 .8-.6 1.4T18 20H6z"
              />
            </svg>
          </a>
          <a
            v-for="link in socialLinks"
            :key="link.label"
            class="action-button btn-logo"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
            :title="link.label"
          >
            <img :src="link.img" alt="" class="button-icon" />
          </a>
        </div>
      </div>
      <div class="image-container">
        <img
          src="/antonio-profile.webp"
          :alt="`${t('about.portraitAlt')} ${profile.name}`"
          class="profile-image"
          width="1000"
          height="1200"
          fetchpriority="high"
        />
      </div>
    </div>
    <article>
      <p class="about-text">{{ t('about.text') }}</p>
    </article>
    <div class="skills-container">
      <h2>{{ t('about.skills') }}</h2>
      <ul class="chips">
        <li v-for="skill in skills" :key="skill.label">
          <ChipComponent :label="skill.label" :icon="skill.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ChipComponent from '../components/ChipComponent.vue';
import { profile } from '../data/profile.js';
import { skills } from '../data/skills.js';
import { useI18n } from '../i18n/index.js';

const { t } = useI18n();

const socialLinks = [
  { label: 'GitHub', href: profile.github, img: '/icons/github-icon.svg' },
  { label: 'LinkedIn', href: profile.linkedin, img: '/icons/linkedin-icon.png' },
];
</script>

<style scoped>
.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
}
h1 {
  margin: 0;
  font-size: 2.625rem;
  line-height: 1.2;
  color: var(--color-text-strong);
}
h2 {
  margin: 0;
  font-size: 1.5rem;
}
.about-text {
  background-color: var(--color-surface);
  padding: 20px;
  border-radius: var(--radius);
}
.info-container {
  max-width: 60%;
  padding: 20px 20px 20px 0;
}
.image-container {
  flex-shrink: 0;
  width: 500px;
  max-width: 100%;
}
.profile-image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 5 / 6;
  border-radius: var(--radius);
  object-fit: cover;
}
.buttons-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.action-button {
  border: 3px solid var(--color-border-strong);
  border-radius: var(--radius);
  padding: 10px;
  height: 75px;
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.btn-logo {
  width: 75px;
}
.action-button:hover {
  border-color: var(--color-text);
  color: var(--color-text-strong);
}
.button-icon {
  height: 100%;
}
.download-icon {
  width: 1.4em;
  height: 1.4em;
  fill: currentColor;
}
.skills-container {
  margin-top: 30px;
}
.chips {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 1200px) {
  .profile-content {
    flex-direction: column;
  }
  .info-container {
    max-width: 100%;
    padding: 20px;
    text-align: center;
  }
  .buttons-container {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.25rem;
  }
  .action-button {
    height: 50px;
    font-size: 1rem;
    padding: 8px;
  }
  .btn-logo {
    width: 50px;
  }
}
</style>
