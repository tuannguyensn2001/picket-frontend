import type { Meta } from '@storybook/react';
import { NotificationItem } from './notification-item';

const Story: Meta<typeof NotificationItem> = {
  component: NotificationItem,
  title: 'NotificationItem',
};
export default Story;

export const Primary = {
  args: {},
};
