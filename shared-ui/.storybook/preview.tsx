import React from 'react';
import { MemoryRouter } from 'react-router';
import bootstrap from 'localization/src/config';
import { QueryClientProvider, QueryClient } from 'react-query';

bootstrap();

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    </MemoryRouter>
  ),
];
