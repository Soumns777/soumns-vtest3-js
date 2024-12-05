import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';


// 创建路由表
export const routes = [
    {
        path: '/',
        redirect: {
            name: 'home'
        },
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(), // 采用HTML5模式,使用 history.pushState API
    routes,
});


export default router;
