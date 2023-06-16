import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../header/header';

export function layout<T extends Record<string, never>>(
  component: React.ComponentType<T>
) {
  const Component = (props: T) => {
    return (
      <Box>
        <Header />
        <Box>{React.createElement(component, props)}</Box>
      </Box>
    );
  };

  return Component;
}
