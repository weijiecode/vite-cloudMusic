import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/home/HomeView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes// 路由配置
})

export default router