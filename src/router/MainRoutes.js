const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: false
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'LandingPage',
      path: '/',
      component: () => import('@/pages/dashboard/DefaultDashboard.vue')
    },
    {
      name: 'Default',
      path: '/dashboard',
      component: () => import('@/pages/dashboard/DefaultDashboard.vue')
    },
    {
      name: 'Starter',
      path: '/starter',
      component: () => import('@/pages/StarterPage.vue')
    },
    {
      name: 'New Store',
      path: '/stores/new',
      component: () => import('@/pages/stores/New.vue')
    },
    {
      name: 'Stores',
      path: '/stores',
      component: () => import('@/pages/stores/StoreList.vue')
    },
    {
      name: 'ManageStore',
      path: '/stores/:str/manage',
      component: () => import('@/pages/stores/ManageStore.vue')
    },
    {
      name: 'Analytics',
      path: '/analytics',
      component: () => import('@/pages/analytics/Dashboard.vue')
    },
    // {
    //   name: 'Material Icons',
    //   path: '/icons/material',
    //   component: () => import('@/views/utilities/icons/MaterialIcons.vue')
    // },
    // {
    //   name: 'Typography',
    //   path: '/utils/typography',
    //   component: () => import('@/views/utilities/typography/TypographyPage.vue')
    // },
    // {
    //   name: 'Shadows',
    //   path: '/utils/shadows',
    //   component: () => import('@/views/utilities/shadows/ShadowPage.vue')
    // },
    // {
    //   name: 'Colors',
    //   path: '/utils/colors',
    //   component: () => import('@/views/utilities/colors/ColorPage.vue')
    // }
  ]
};

export default MainRoutes;
