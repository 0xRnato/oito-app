import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/views/Terms'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search'),
    },
    {
      path: '/404',
      name: 'page-not-found',
      component: () => import('@/views/PageNotFound'),
    },
  ],
});
