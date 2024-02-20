import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: ()=>import('./views/Home.vue')
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('./views/About.vue')
  },
  {
    path: '/details/:userID',
    name: 'DetailsPage',
    component: () => import('./views/Details.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router