import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { router } from '@picket/routing';
import { ReactQueryDevtools } from 'react-query/devtools';

/* eslint-disable-next-line */
export interface AppProviderProps {}

const client = new QueryClient();

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <RouterProvider fallbackElement={<div>loading</div>} router={router} />
      </QueryClientProvider>
    </>
  );
}

export default AppProvider;
