import { StoryObj, Meta } from '@storybook/react';
import { WorkoutOfTheDayCard } from '.';

const meta: Meta<typeof WorkoutOfTheDayCard> = {
  component: WorkoutOfTheDayCard,
  title: 'Components/WorkoutOfTheDayCard',
  args: {
    workout: {
      standard: [
        {
          name: 'Front Squat',
          reps: 5,
          weight: '185',
        },
        {
          name: 'Pull Ups',
          reps: 10,
          weight: '',
        },
        {
          name: 'Burpees',
          reps: 15,
          weight: '',
        },
      ],
      scaled: [
        {
          name: 'Front Squat',
          reps: 5,
          weight: '135',
        },
        {
          name: 'Jumping Pull Ups',
          reps: 10,
          weight: '',
        },
        {
          name: 'Burpees',
          reps: 15,
          weight: '',
        },
      ],
      rounds: 5,
      time: '15:00',
      type: 'AMRAP',
    },
  },
};

export default meta;

type Story = StoryObj<typeof WorkoutOfTheDayCard>;

export const Default: Story = {
  args: {
  },
};
