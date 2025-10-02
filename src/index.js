import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
document.head.appendChild(link)
document.title = 'Antonio Jaramillo - Portfolio';

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/x-icon';
favicon.href = '/favicon.png';
document.head.appendChild(favicon);

createApp(App).mount('#root');
