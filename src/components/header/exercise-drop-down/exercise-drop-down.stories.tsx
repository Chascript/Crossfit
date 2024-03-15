import { Meta, StoryObj } from '@storybook/react';
import { ExerciseDropDowns } from '.';

const meta: Meta<typeof ExerciseDropDowns> = {
  component: ExerciseDropDowns,
  title: 'Components/ExerciseDropDowns',
};

export default meta;

type Story = StoryObj<typeof ExerciseDropDowns>;

export const Default: Story = {};
