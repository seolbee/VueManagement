import { createApp } from 'vue'
import router from './router';
import App from './App.vue';

import './assets/css/app.css';

let vueApp = createApp(App);
vueApp.use(router).mount('#app');