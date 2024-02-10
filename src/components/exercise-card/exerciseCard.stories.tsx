import type { Meta, StoryObj } from '@storybook/react';
import { ExerciseCard } from '.';

const meta: Meta<typeof ExerciseCard> = {
  component: ExerciseCard,
  title: 'Components/ExerciseCard',
  args: {
    title: 'Sample Exercise',
    description: 'This is a sample exercise description.',
    image: 'https://example.com/image.jpg',
    link: 'https://example.com/exercise',
    linkText: 'Learn More',
    tags: ['tag1', 'tag2'],
    difficulty: 3,
  },
  argTypes: {
    difficulty: {
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

type Story = StoryObj<typeof ExerciseCard>;

export const Default: Story = {
  args: {
    title: 'Back Squat',
    description: 'The back squat requires the structures of the lower body and core to work synergistically. Optimal performance requires an adequate range of motion at the ankles, hips, and knees; superior lower-body strength; and a tremendous amount of core stability.',
    image: 'https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.crossfit.com/essentials/the-back-squat',
    linkText: 'Learn More',
    tags: ['Strength', 'Mobility'],
    difficulty: 3,
  },
};
