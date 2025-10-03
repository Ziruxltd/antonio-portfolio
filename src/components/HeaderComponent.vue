<template>
  <header>
    <nav>
      <ul>
        <li v-for="option in modelValue" :key="option.name">
          <a
            :class="{ selected: option.selected }"
            @click="handleClick(option)"
            >{{ option.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue', 'clickOption']);

function handleClick(option) {
  const updatedOptions = props.modelValue.map(opt => ({
    ...opt,
    selected: opt.name === option.name
  }));
  
  emit('update:modelValue', updatedOptions);
  emit('clickOption', option);
}
</script>

<style scoped>
header {
  padding: 0.5em 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
nav ul {
  background-color: #2c2c30;
  max-width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 5px 10px;
  border-radius: 12px;
  border: 1px solid #444;
  box-sizing: border-box;
}
nav ul li {
  margin: 0 0.3em;
  display: flex;
  align-items: center;
  cursor: pointer;
}
nav ul li a {
  color: #8d8c8e;
  text-decoration: none;
  font-size: 0.5em;
  padding: 0.15em 0.3em;
}
nav ul li a:hover {
  color: #d9d8dd;
}
nav ul li a.selected {
  color: #2c2c30;
  font-weight: bold;
  background-color: #d9d8dd;
  border-radius: 6px;
  border: 1px solid #444;
}

@media (max-width: 600px) {
  nav ul {
    font-size: 0.8em;
    gap: 0.5em;
    padding: 0 5px;
  }
  nav ul li {
    margin: 0.3em 0;
  }
  nav ul li a {
    padding: 0.4em 0.5em;
  }

}
</style>