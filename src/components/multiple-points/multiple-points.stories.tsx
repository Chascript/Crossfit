import type { Meta, StoryObj } from '@storybook/react';
import MultiplePoints from '.';

import fistBump from '../../../public/images/fist-bump.jpg';

const meta: Meta<typeof MultiplePoints> = {
  component: MultiplePoints,
  title: 'Components/MultiplePoints',
  args: {
    heading: 'Core Principles',
    description: 'CrossFits core principles ensure adaptable, comprehensive fitness for all levels, promoting lasting health and growth',
    image: fistBump.src,
  },
};

export default meta;

type Story = StoryObj<typeof MultiplePoints>;

export const Position12346: Story = {
  args: {
    bullets: [
      {
        position: 1,
        heading: 'Constantly Varied',
        description: 'CrossFit workouts are never the same, ensuring that your body is constantly adapting and improving.',
      },
      {
        position: 2,
        heading: 'Functional Movements',
        description: 'CrossFit emphasizes functional movements that mimic real-life activities, helping you build strength, flexibility, and agility that translate to better performance in everyday tasks.',
      },
      {
        position: 3,
        heading: 'High Intensity',
        description: 'By pushing yourself to the limit in short bursts of intense exercise, you\'ll maximize your results in minimal time.',
      },
      {
        position: 4,
        heading: 'Community',
        description: 'CrossFit is more than just a workout; it\'s a community of like-minded individuals who support and encourage each other to reach their fitness goals.',
      },
      {
        position: 6,
        heading: 'Workouts Tailored to Every Level',
        description: 'CrossFit workouts are designed to be scalable, meaning that they can be adapted to suit any fitness level, from beginners to elite athletes.',
      },
    ],
  },
};

export const Position246: Story = {
  args: {
    bullets: [
      {
        position: 2,
        heading: 'Functional Movements',
        description: 'CrossFit emphasizes functional movements that mimic real-life activities, helping you build strength, flexibility, and agility that translate to better performance in everyday tasks.',
      },
      {
        position: 4,
        heading: 'Community',
        description: 'CrossFit is more than just a workout; it\'s a community of like-minded individuals who support and encourage each other to reach their fitness goals.',
      },
      {
        position: 6,
        heading: 'Workouts Tailored to Every Level',
        description: 'CrossFit workouts are designed to be scalable, meaning that they can be adapted to suit any fitness level, from beginners to elite athletes.',
      },
    ],
  },
};
