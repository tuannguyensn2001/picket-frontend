import type { Meta } from '@storybook/react';
import { Course } from './course';

const Story: Meta<typeof Course> = {
  component: Course,
  title: 'Course',
};
export default Story;

export const Primary = {
  args: {},
};
