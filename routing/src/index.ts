import { createBrowserRouter } from 'react-router-dom';
import { Login, withAuth } from '@picket/auth';
import { layout } from '@picket/shared-ui';

const router = createBrowserRouter([
  {
    path: '/auth/login',
    async lazy() {
      const { Login } = await import('@picket/auth');
      return {
        Component: Login,
      };
    },
  },
  {
    path: '/',
    async lazy() {
      const { Home } = await import('@picket/home');
      return {
        Component: withAuth(layout(Home)),
      };
    },
  },
]);

export { router };
