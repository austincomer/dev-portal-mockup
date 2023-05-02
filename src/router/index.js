import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/quickstart',
        name: 'quickstart',
        component: () => import('../views/QuickstartView.vue')
    },
    {
        path: '/concepts',
        name: 'concepts',
        component: () => import('../views/ConceptsView.vue')
    },
    {
        path: '/guides',
        name: 'guides',
        component: () => import('../views/GuidesView.vue')
    },
    {
        path: '/api',
        name: 'api',
        component: () => import('../views/ApiView.vue')
    },
    {
        path: '/support',
        name: 'support',
        component: () => import('../views/SupportView.vue')
    },
    
  ]
})

export default router