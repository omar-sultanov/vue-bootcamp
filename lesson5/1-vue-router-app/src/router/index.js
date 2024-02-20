import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NewBookmark from '../views/NewBookmark.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/newmark',
    name: 'NewBookmark',
    component: NewBookmark
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router