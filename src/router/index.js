import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@/views/Auth';
import AuthLogin from '@/views/auth/AuthLogin';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'auth_login_path',
        component: AuthLogin
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
