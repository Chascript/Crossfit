import { StoryObj, Meta } from '@storybook/react';
import ExerciseTitle from '.';

export default {
  title: 'Components/Exercise/ExerciseTitle',
  component: ExerciseTitle,
  args: {
    title: 'Title',
    description: 'This is a description',
    difficulty: 1,
  },
} as Meta;

type Story = StoryObj<typeof ExerciseTitle>;

export const Thrusters: Story = {
  args: {
    title: 'Thrusters',
    description: 'Thrusters combine a front squat with an overhead press in one fluid movement. This exercise is highly functional, as it mimics real-world movements like lifting objects from the ground and pressing them overhead. It improves strength, power, and coordination.',
    difficulty: 3,
  },
};
