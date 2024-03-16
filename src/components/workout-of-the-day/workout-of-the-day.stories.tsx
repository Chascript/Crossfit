import { StoryObj, Meta } from '@storybook/react';
import { WorkoutOfTheDayCard } from '.';

const meta: Meta<typeof WorkoutOfTheDayCard> = {
  component: WorkoutOfTheDayCard,
  title: 'Components/WorkoutOfTheDayCard',
  args: {},
};

export default meta;

type Story = StoryObj<typeof WorkoutOfTheDayCard>;

export const Default: Story = {
  args: {
  },
};
