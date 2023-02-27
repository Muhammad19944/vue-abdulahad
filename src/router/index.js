import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Watch.vue'
// import HomeView from '../views/Test/VModel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
