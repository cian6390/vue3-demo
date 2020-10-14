import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export const router = createRouter({
    // mode: 'history', see: https://next.router.vuejs.org/guide/migration/#new-history-option-to-replace-mode
    history: createWebHistory(),
    routes
})