import { StoryObj, Meta } from '@storybook/react';
import ExerciseMovement from '.';

export default {
  title: 'Components/Exercise/ExerciseMovement',
  component: ExerciseMovement,
  args: {
    movement: {
      description: 'This is a description',
      purpose: 'This is the purpose',
      benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
      commonUsage: 'This is the common usage',
    },
  },
} as Meta;

type Story = StoryObj<typeof ExerciseMovement>;

export const Thrusters: Story = {
  args: {
    movement: {
      description: 'Thrusters combine a front squat with an overhead press in one fluid movement. This exercise is highly functional, as it mimics real-world movements like lifting objects from the ground and pressing them overhead. It improves strength, power, and coordination.',
      purpose: 'The purpose of thrusters is to build full-body strength, improve cardiovascular conditioning, and enhance functional movement patterns.',
      benefits: ['Builds strength in legs, shoulders, and core', 'Improves power and explosiveness', 'Enhances cardiovascular endurance'],
      commonUsage: 'Thrusters are commonly used in CrossFit workouts, often as part of high-intensity interval training (HIIT) or as a standalone strength exercise.',
    },
  },
};
