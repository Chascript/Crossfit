import { StoryObj, Meta } from '@storybook/react';
import { ExerciseTags } from '.';

export default {
  title: 'Components/Exercise/ExerciseTags',
  component: ExerciseTags,
  args: {
    tags: ['Thrusters', 'CrossFit', 'Weightlifting', 'Barbell'],
  },
} as Meta;

type Story = StoryObj<typeof ExerciseTags>;

export const Small: Story = {
  args: {
    tagSize: 'sm',
  },
};

export const Medium: Story = {
  args: {
    tagSize: 'md',
  },
};

export const Large: Story = {
  args: {
    tagSize: 'lg',
  },
};
