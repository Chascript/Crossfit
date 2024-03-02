import { StoryObj, Meta } from '@storybook/react';
import ExerciseStepByStepGuide from '.';

export default {
  title: 'Components/Exercise/ExerciseStepByStepGuide',
  component: ExerciseStepByStepGuide,
  args: {
    name: 'Exercise Name',
    stepByStepGuide: {
      description: 'This is a description of the exercise step by step guide.',
      instructions: [
        'Step 1',
        'Step 2',
        'Step 3',
      ],
      tips: [
        'Tip 1',
        'Tip 2',
        'Tip 3',
      ],
    },
  },
} as Meta;

type Story = StoryObj<typeof ExerciseStepByStepGuide>;

export const Thrusters: Story = {
  args: {
    name: 'Thrusters',
    stepByStepGuide: {
      description: 'This how-to guide will walk you through the steps to perform a thruster, a compound exercise that combines a front squat with an overhead press. Thrusters target multiple muscle groups and are commonly used in CrossFit workouts for their effectiveness in building strength and improving cardiovascular endurance.',
      instructions: [
        'Step 1: Front squat the barbell',
        'Step 2: Push press the barbell',
        'Step 3: Overhead squat the barbell',
      ],
      tips: [
        'Tip 1: Keep your elbows up',
        'Tip 2: Keep your chest up',
        'Tip 3: Keep your core tight',
      ],
    },
  },
};
