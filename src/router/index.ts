import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import('../views/home/HomeView.vue'),
        children: [
            {
                path: '/recommend',
                name: 'recommend',
                meta: {
                    title: '推荐音乐'
                },
                component: () => import('../views/recommend/RecommendView.vue')
            },
            {
                path: '/hot',
                name: 'hot',
                meta: {
                    title: '热歌榜'
                },
                component: () => import('../views/hot/HotView.vue')
            },
            {
                path: '/search',
                name: 'search',
                meta: {
                    title: '搜索'
                },
                component: () => import('../views/search/SearchView.vue')
            }
        ]
    },{
        path: '/play',
        name: 'play',
        meta: {
            title: '播放页'
        },
        component: () => import('../views/play/PlayView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes// 路由配置
})

router.beforeEach((to, from, next) => {
    // 设置页面标题
    if(to.meta.title) {
        document.title = String(to.meta.title)
    }else {
        document.title = '网易云'
    }
    next()
})

export default router