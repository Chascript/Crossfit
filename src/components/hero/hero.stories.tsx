import type { Meta, StoryObj } from '@storybook/react';
import Hero from '.';

import crossfitTyreImage from '../../../public/banners/home-hero-1.jpg';
import crossfitRopesImage from '../../../public/banners/crossfit-ropes.jpg';

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Components/Hero',
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Home: Story = {
  args: {
    heading: 'Begin Your CrossFit Journey',
    description: 'At CrossFit Info, we are here to help you on your fitness journey. Trust the process, embrace the challenges, and reach your goals with our dedicated exercise guides by your side.',
    primaryImage: crossfitTyreImage.src,
    primaryBackgroundImage: 'static/media/public/banners/home-hero-1.jpg',
    secondaryImage: crossfitRopesImage.src,
    linkText: 'Find Exercises',
    linkUrl: '/exercises',
  },
};
