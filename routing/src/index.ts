import { createBrowserRouter } from 'react-router-dom';
import { Login, withAuth } from '@picket/auth';
import { layout } from '@picket/shared-ui';
import { compose } from '@picket/utils';
import React from 'react';

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
  {
    path: '/settings',
    async lazy() {
      const { Layout } = await import('@picket/settings');
      return {
        Component: compose(withAuth(), layout)(Layout),
      };
    },
    errorElement: React.createElement('div', {
      children: 'Error',
    }),
    children: [
      {
        path: 'personal',
        async lazy() {
          const { Personal } = await import('@picket/settings');
          return {
            Component: Personal,
          };
        },
      },
      {
        path: 'security',
        async lazy() {
          const { Security } = await import('@picket/settings');
          return {
            Component: Security,
          };
        },
      },
      {
        path: 'notification',
        async lazy() {
          const { Notification } = await import('@picket/settings');
          return {
            Component: Notification,
          };
        },
      },
    ],
  },
]);

export { router };
