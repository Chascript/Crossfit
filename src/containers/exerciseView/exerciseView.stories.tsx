import { StoryObj, Meta } from '@storybook/react';
import ExerciseView from '.';

export default {
  title: 'Views/ExerciseView',
  component: ExerciseView,
  args: {},
} as Meta;

type Story = StoryObj<typeof ExerciseView>;

export const Default: Story = {
  args: {},
};
