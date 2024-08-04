const AuthRoutes = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Login',
      path: '/auth/login',
      component: () => import('@/pages/authentication/auth/LoginPage.vue')
    },
    {
      name: 'Error 404',
      path: '/pages/error',
      component: () => import('@/pages/maintenance/errors/Error404Page.vue')
    }
  ]
};

export default AuthRoutes;
