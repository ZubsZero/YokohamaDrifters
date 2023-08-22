import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products-view.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact-View.vue')
  },
  {
    path: '/single-view',
    name: 'single-product',
    component: () => import('../views/Single-View.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin-View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
