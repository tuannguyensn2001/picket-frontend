import styles from './app-provider.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from '@picket/shared-ui';

/* eslint-disable-next-line */
export interface AppProviderProps {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
]);

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AppProvider;
