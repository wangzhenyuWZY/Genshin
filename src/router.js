import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./view/home.vue')
        },
        {
            path: '/portalA',
            name: 'portalA',
            component: () => import('./view/portalA.vue')
        }
    ]
})

export default router
