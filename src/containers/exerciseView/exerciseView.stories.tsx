import { StoryObj, Meta } from '@storybook/react';
import ExerciseView from '.';

import { crossfitExercises } from '../../server/crossfitExercises/exerciseExamples';

export default {
  title: 'Views/ExerciseView',
  component: ExerciseView,
  args: {
    crossfitExercises,
  },
} as Meta;

type Story = StoryObj<typeof ExerciseView>;

export const Default: Story = {
  args: {
  },
};
