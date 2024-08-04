// import { RouteParams, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import { isAuthorized } from '../stores/auth'
export const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/maintenance/errors/Error404Page.vue')
  },
  { path: '/', component: Login, beforeEnter: () => !isAuthorized()},
  { name: 'home', path: '/home', component: Home, beforeEnter: () => isAuthorized() }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/maintenance/errors/Error404Page.vue')
    },
    AuthRoutes,
    MainRoutes

  ],
})

export function routerPush(name, params) {
  router.push({ path: name })
  // return params === undefined
  //   ? router.push({ name })
  //   : router.push({ name, params })
}

router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth/login'];
  const authRequired = !publicPages.includes(to.path);

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return next('/auth/login');
    } else next();
  } else {
    next();
  }
});