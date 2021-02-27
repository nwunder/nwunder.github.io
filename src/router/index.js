import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('@/components/Home').default,
            name: 'home'
        },
        {
            path: '/resume',
            component: require('@/components/Home').default,
            name: 'resume'
        },
        {
            path: '/work',
            component: require('@/components/Work').default,
            name: 'work'
        }
    ]
});

export default router;