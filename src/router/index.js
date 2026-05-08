import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StyleDetail from '../views/StyleDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/style/:id', name: 'StyleDetail', component: StyleDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
