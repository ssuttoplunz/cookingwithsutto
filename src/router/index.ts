import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Recipe from '@/views/Recipe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
