import { StoryObj, Meta } from '@storybook/react';
import WorkoutOfTheDayView from '.';

export default {
  title: 'Views/WorkoutOfTheDayView',
  component: WorkoutOfTheDayView,
  args: {},
} as Meta;

type Story = StoryObj<typeof WorkoutOfTheDayView>;

export const Default: Story = {
  args: {},
};
