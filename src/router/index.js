import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicy.vue'),
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: () => import('../views/TermsOfService.vue'),
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/Support.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/kusurino_marketing/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
