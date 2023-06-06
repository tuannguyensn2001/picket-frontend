import type { Meta } from '@storybook/react';
import { Course } from './course';

const Story: Meta<typeof Course> = {
  component: Course,
  title: 'Course',
};
export default Story;

export const Golang = {
  args: {
    thumbnail:
      'https://www.bkns.vn/wp-content/uploads/2022/11/golang-Programing.jpg',
    name: 'Golang Programming',
    numberOfLearners: 1000,
    isMember: true,
  },
};

export const React = {
  args: {
    ...Golang.args,
    thumbnail:
      'https://vietnix.vn/wp-content/uploads/2021/04/react-js-1024x576.png',
    name: 'ReactJS',
    isMember: false,
  },
};
