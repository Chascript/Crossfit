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
        { name: 'name1', step: 'step1' },
        { name: 'name2', step: 'step2' },
        { name: 'name3', step: 'step3' },
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
        { name: 'Starting Position', step: 'Start with the barbell resting on your shoulders, with your feet shoulder-width apart and toes slightly turned out.' },
        { name: 'Front Squat', step: 'Perform a front squat by bending your knees and lowering your hips until your thighs are parallel to the ground.' },
        { name: 'Overhead Press', step: 'As you stand up from the squat, simultaneously push the barbell overhead, extending your arms fully.' },
        { name: 'Return to Starting Position', step: 'Lower the barbell back to your shoulders and repeat the movement for the desired number of repetitions.' },
      ],
      tips: [
        'Tip 1: Keep your elbows up',
        'Tip 2: Keep your chest up',
        'Tip 3: Keep your core tight',
      ],
    },
  },
};
