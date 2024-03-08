import { StoryObj, Meta } from '@storybook/react';
import { ExerciseSampleWorkout } from '.';

export default {
  title: 'Components/Exercise/ExerciseSampleWorkout',
  component: ExerciseSampleWorkout,
  args: {
    sampleWorkout: {
      title: 'Title of the workout',
      description: 'This is a description of the workout',
      steps: ['Step 1', 'Step 2', 'Step 3'],
    },
    equipment: ['Equipment 1', 'Equipment 2', 'Equipment 3'],
  },
} as Meta;

type Story = StoryObj<typeof ExerciseSampleWorkout>;

export const Thrusters: Story = {
  args: {
    sampleWorkout: {
      title: 'Thrusters',
      description: 'Thrusters combine a front squat with an overhead press in one fluid movement. This exercise is highly functional, as it mimics real-world movements like lifting objects from the ground and pressing them overhead. It improves strength, power, and coordination.',
      steps: ['Take a barbell and clean it to your shoulders', 'Squat down', 'Stand up and press the barbell overhead'],
    },
    equipment: ['Barbell', 'Dumbbells', 'Kettlebells'],
  },
};
