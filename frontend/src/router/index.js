import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/adminView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/menuView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signupView.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../views/feedbackView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cartView.vue')
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
