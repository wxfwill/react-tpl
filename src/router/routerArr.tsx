import Login from '@/page/user/Login';
import Test from '@/page/test/Test';

export const routes = [
  {
    path: '/',
    component: Login,
    auth: false,
  },
  {
    path: '/login',
    component: Login,
    auth: false,
  },
  {
    path: '/map/test',
    component: Test,
    auth: true,
  },
];
