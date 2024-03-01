import { StoryObj, Meta } from '@storybook/react';
import ExerciseListView from '.';

import { crossfitExercises } from '../../server/crossfitExercises/exerciseExamples';

export default {
  title: 'Views/ExerciseListView',
  component: ExerciseListView,
  args: {
    crossfitExercises,
  },
} as Meta;

type Story = StoryObj<typeof ExerciseListView>;

export const Default: Story = {
  args: {
  },
};
