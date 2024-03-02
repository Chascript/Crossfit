import { StoryObj, Meta } from '@storybook/react';
import ExerciseStepByStepGuide from '.';

export default {
  title: 'Components/Exercise/ExerciseStepByStepGuide',
  component: ExerciseStepByStepGuide,
  args: {
    name: 'Exercise Name',
    stepByStepGuide: {
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
