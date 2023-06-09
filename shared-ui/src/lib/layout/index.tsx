import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../header/header';

export function layout(component: React.ComponentType) {
  const Component = (props: any) => {
    return (
      <Box>
        <Header />
        <Box>{React.createElement(component, props)}</Box>
      </Box>
    );
  };

  return Component;
}
