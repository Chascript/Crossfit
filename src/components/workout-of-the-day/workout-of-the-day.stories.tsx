import { StoryObj, Meta } from '@storybook/react';
import { WorkoutOfTheDayCard } from '.';

const meta: Meta<typeof WorkoutOfTheDayCard> = {
  component: WorkoutOfTheDayCard,
  title: 'Components/WorkoutOfTheDayCard',
  args: {
    isScaled: true,
    setIsScaled: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof WorkoutOfTheDayCard>;

export const ScaledWorkout: Story = {
  args: {
  },
};

export const Rx: Story = {
  args: {
    isScaled: false,
  },
};
