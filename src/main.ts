import { createApp } from 'vue'
import './style.css'
import router from './router'
import APP from './App.vue'
import { createPinia } from 'pinia';

createApp(APP).use(createPinia()).use(router).mount('#app')
