import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'

import '@/assets/main.css'
import '@/assets/bootstrap.min.css'

const routes = [
  { path: '/', name: 'home', component: HomePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
