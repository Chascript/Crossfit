import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Components/Footer',
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
