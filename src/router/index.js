import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VideoMasaje from '../views/VideoMasaje.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/video-masaje', name: 'VideoMasaje', component: VideoMasaje }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router