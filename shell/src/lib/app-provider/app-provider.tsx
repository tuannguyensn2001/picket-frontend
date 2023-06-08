import styles from './app-provider.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from '@picket/shared-ui';
import { QueryClientProvider, QueryClient } from 'react-query';

/* eslint-disable-next-line */
export interface AppProviderProps {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
]);

const client = new QueryClient();

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default AppProvider;
