import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '.';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'Components/inputs/SearchBar',
  args: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => { console.log(event.target.value); },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {},
};
