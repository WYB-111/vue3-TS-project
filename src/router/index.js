// vue-router中提供3种的路由模式
import {
    createWebHistory,
    createRouter
} from 'vue-router'

const routes = [{
    path: '/Login',
    component: () => import('@/components/Login.vue'),
}, {
    path: '/',
    redirect: '/Login'
}]

const router = createRouter({
    // 路由的模式
    history: createWebHistory(),
    // 路由规则
    routes
})

export default router