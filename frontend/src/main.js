import { createApp } from 'vue'
import router from './router';
import App from './App.vue';

import './assets/css/app.css';
import store from './store'

const vueApp = createApp(App);

vueApp.use(store);
vueApp.use(router);

vueApp.mount('#app');