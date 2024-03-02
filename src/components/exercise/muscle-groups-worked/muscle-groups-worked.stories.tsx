import { StoryObj, Meta } from '@storybook/react';
import ExerciseMuscleGroupsWorked from '.';

export default {
  title: 'Components/Exercise/ExerciseMuscleGroupsWorked',
  component: ExerciseMuscleGroupsWorked,
  args: {
    muscleGroupsWorked: {
      primaryMuscleGroups: ['Muscle1', 'Muscle2', 'Muscle3'],
      secondaryMuscleGroups: ['Muscle4', 'Muscle5', 'Muscle6'],
      description: 'This is a description',
    },
  },
} as Meta;

type Story = StoryObj<typeof ExerciseMuscleGroupsWorked>;

export const Thrusters: Story = {
  args: {
    muscleGroupsWorked: {
      primaryMuscleGroups: ['Quadriceps', 'Glutes', 'Shoulders'],
      secondaryMuscleGroups: ['Hamstrings', 'Calves', 'Triceps'],
      description: 'Thrusters are a compound exercise that targets multiple muscle groups. The primary muscles worked are the quadriceps, glutes, and shoulders. Secondary muscles worked include the hamstrings, calves, and triceps.',
    },
  },
};
