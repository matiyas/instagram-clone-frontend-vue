import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '@/views/Auth';
import AuthLogin from '@/views/auth/AuthLogin';
import AuthIndex from '@/views/auth/AuthIndex';
import AuthSignup from '@/views/auth/AuthSignup';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'root_path',
    redirect: { name: 'auth_index_path' }
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: '',
        name: 'auth_index_path',
        component: AuthIndex
      },
      {
        path: 'login',
        name: 'auth_login_path',
        component: AuthLogin
      },
      {
        path: 'signup',
        name: 'auth_signup_path',
        component: AuthSignup
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
