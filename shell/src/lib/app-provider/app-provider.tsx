import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { router } from '@picket/routing';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable-next-line */
export interface AppProviderProps {}

const client = new QueryClient();

export function AppProvider(props: AppProviderProps) {
  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <GoogleOAuthProvider
          clientId={
            '406915386923-nohqgg2rjqh348qomg6c1964luit4u38.apps.googleusercontent.com'
          }
        >
          <RouterProvider
            fallbackElement={<div>loading</div>}
            router={router}
          />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default AppProvider;
