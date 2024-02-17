import React from 'react';
import { Hero } from '../components/hero';

import crossfitTyreImage from '../../public/banners/home-hero-1.jpg';
import crossfitRopesImage from '../../public/banners/crossfit-ropes.jpg';
import fistBump from '../../public/images/fist-bump.jpg';

import MultiplePoints from '../components/multiple-points';
import { Bullets } from '../types';

const CorePrinciples: Bullets[] = [
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
];

const HomePage = () => (
  <>
    <Hero
      heading="Begin Your CrossFit Journey"
      description="At CrossFit Info, we are here to help you on your fitness journey. Trust the process, embrace the challenges, and reach your goals with our dedicated exercise guides by your side."
      primaryImage={crossfitTyreImage.src}
      primaryBackgroundImage="/banners/home-hero-1.jpg"
      secondaryImage={crossfitRopesImage.src}
      linkText="Find Exercises"
      linkUrl="/exercises"
    />
    <MultiplePoints
      heading="Core Principles"
      description="CrossFits core principles ensure adaptable, comprehensive fitness for all levels, promoting lasting health and growth"
      image={fistBump.src}
      bullets={CorePrinciples}
    />
  </>
);

export default HomePage;
