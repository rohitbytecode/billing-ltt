import { createRouter, createWebHistory } from 'vue-router';

import { LoginPage } from '../pages/auth';
import { DashboardPage } from '../pages/dashboard';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
    },
  ],
});

export default router;
