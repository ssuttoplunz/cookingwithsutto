import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Recipe from '../views/Recipe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
