'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import crossfitTyre from '../../../public/banners/home-hero-1.jpg';
import crossfitRopes from '../../../public/banners/crossfit-ropes.jpg';

export const HeroSection = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowFirstSection(true), 1000);
    const timeout2 = setTimeout(() => setShowSecondSection(true), 2000);
    const timeout3 = setTimeout(() => setShowThirdSection(true), 2500);
    const timeout4 = setTimeout(() => setShowImage(true), 3000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center justify-center h-unit-9xl pl-10 pr-10 my-4">
      {/* Left side */}
      <div className="grid grid-rows-3 md:col-span-3 gap-8 h-full">
        {/* First section */}
        <div className={`row-span-2 col-span-3 bg-gray-200 rounded-[30px] p-8 flex flex-col justify-between md:transition-transform md:duration-1000 ${showFirstSection ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-full md:opacity-0'}`}>
          <div className="flex flex-col justify-start mt-4">
            <h1 className="text-3xl md:text-6xl text-black font-bold w-5/6">Begin Your CrossFit Journey Today</h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-black w-full md:w-1/2">
              At CrossFit Info, we are here to help you on your fitness journey. Trust the process, embrace the challenges, and reach your goals with our dedicated exercise guides by your side.
            </p>
          </div>
        </div>
        {/* Second section */}
        <div className={`row-span-1 col-span-2 relative rounded-[30px] p-8 transition-transform duration-1000 ${showSecondSection ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <Image src={crossfitRopes} alt="Hero image" layout="fill" objectFit="cover" className="rounded-[30px] transform scale-x-[-1]" />
        </div>
        {/* Third section */}
        <Link href="/exercises" className={`row-span-1 col-span-1 bg-black text-white rounded-[30px] hover:bg-gray-200 hover:text-black cursor-pointer p-8 flex justify-center items-center transition-transform duration-1000 ${showThirdSection ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <div className="text-xl md:text-lg font-bold flex items-center px-4 py-2">
            Find Exercises
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </div>
      {/* Right side (image) */}
      <div className={`col-span-3 md:col-span-3 w-full h-full relative rounded-[30px] transition-transform duration-1000 ${showImage ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <Image src={crossfitTyre} alt="Hero image" layout="fill" objectFit="cover" className="rounded-[30px]" />
      </div>
    </div>
  );
};

export default HeroSection;
