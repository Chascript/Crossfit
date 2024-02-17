import React from 'react';
import { Hero } from '../components/hero';

import crossfitTyreImage from '../../public/banners/home-hero-1.jpg';
import crossfitRopesImage from '../../public/banners/crossfit-ropes.jpg';

const HomePage = () => (
  <Hero
    heading="Begin Your CrossFit Journey"
    description="At CrossFit Info, we are here to help you on your fitness journey. Trust the process, embrace the challenges, and reach your goals with our dedicated exercise guides by your side."
    primaryImage={crossfitTyreImage.src}
    primaryBackgroundImage="/banners/home-hero-1.jpg"
    secondaryImage={crossfitRopesImage.src}
    linkText="Find Exercises"
    linkUrl="/exercises"
  />
);

export default HomePage;
