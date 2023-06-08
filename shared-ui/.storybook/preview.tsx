import React from 'react';
import { MemoryRouter } from 'react-router';
import bootstrap from 'localization/src/config';

bootstrap();

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];
