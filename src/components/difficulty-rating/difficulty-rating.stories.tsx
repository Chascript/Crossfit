import type { Meta, StoryObj } from '@storybook/react';
import DifficultyRating from '.';

const meta: Meta<typeof DifficultyRating> = {
  component: DifficultyRating,
  title: 'Components/DifficultyRating',
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DifficultyRating>;

export const Rating1: Story = {
  args: {
    value: 1,
  },
};

export const Rating3: Story = {
  args: {
    value: 3,
  },
};

export const Rating5: Story = {
  args: {
    value: 5,
  },
};
