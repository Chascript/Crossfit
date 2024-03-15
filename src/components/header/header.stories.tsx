import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  args: {
    exerciseNav: [
      {
        title: 'Exercise 1',
        link: '/exercise-1',
      },
      {
        title: 'Exercise 2',
        link: '/exercise-2',
      },
      {
        title: 'Exercise 3',
        link: '/exercise-3',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const WithExerciseNav: Story = {
  args: {
    exerciseNav: [
      {
        title: 'Thurster',
        link: '/thurster',
      },
      {
        title: 'Deadlift',
        link: '/deadlift',
      },
      {
        title: 'Pull Up',
        link: '/pull-up',
      },
    ],
  },
};
