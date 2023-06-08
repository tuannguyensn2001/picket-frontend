import type { Meta } from '@storybook/react';
import { Header } from './header';

const Story: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  decorators: [
    (Story) => {
      localStorage.removeItem('token');
      return <Story />;
    },
  ],
  parameters: {
    mockData: [
      {
        url: 'http://localhost:12000/api/v1/auth/me',
        method: 'GET',
        status: 200,
        response: {
          data: {
            id: 1,
            username: 'Tuan Nguyen',
            email: 'tuannguyensn2001a@gmail.com',
            profile: {
              avatar_url:
                'https://www.dutchnews.nl/wpcms/wp-content/uploads/2022/10/Depositphotos_454636608_S.jpg',
            },
          },
        },
      },
    ],
  },
};
export default Story;

export const Primary = {
  args: {},
};
