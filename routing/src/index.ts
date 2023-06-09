import { createBrowserRouter } from 'react-router-dom';
import { Login, withAuth } from '@picket/auth';
import { layout } from '@picket/shared-ui';
import { compose } from '@picket/utils';

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
        Component: compose(withAuth(), layout)(Home),
      };
    },
  },
]);

export { router };
