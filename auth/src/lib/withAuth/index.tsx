import React, { createElement } from 'react';
import { useUser } from '../../useUser';
import { Navigate } from 'react-router-dom';

export function withAuth(reverse = false) {
  return (component: React.ComponentType) => {
    const Component = (props: any) => {
      const { isError, isLoading } = useUser();

      if (isLoading) {
        return <div>Loading...</div>;
      }

      if (isError) {
        return <Navigate to={'/auth/login'} />;
      }

      return createElement(component, props);
    };

    return Component;
  };
}
