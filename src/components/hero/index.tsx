'use client';

import { useState, useEffect, useLayoutEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

// Define a function to check the screen size
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export interface Props {
  heading: string;
  description: string;
  primaryImage: string;
  primaryBackgroundImage: string;
  secondaryImage: string;
  linkText: string;
  linkUrl: string;
}

export const Hero = ({
  heading,
  description,
  primaryImage,
  primaryBackgroundImage,
  secondaryImage,
  linkText,
  linkUrl,
}:Props) => {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const [width] = useWindowSize();
  const isLargeScreen = width >= 970;
  const backgroundImageStyle = {
    backgroundImage: isLargeScreen ? 'none' : `url(${primaryBackgroundImage})`,
  };

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
    <div className="grid px-4 gap-2 grid-cols-1 h-[600px] lg:pl-10 lg:pr-10 lg:grid-cols-6 lg:gap-8 lg:items-center lg:justify-center mt-4 mb-12">
      {/* Left side */}
      <div className="grid grid-rows-6 md:grid-cols-6 lg:grid-cols-3 lg:grid-rows-3 gap-2 h-[600px] lg:col-span-3 lg:gap-8">
        {/* First section */}
        <div
          className={`row-span-5 sm:pl-4 sm:pb-4 md:col-span-6 lg:col-span-3 lg:row-span-2 relative bg-cover p-2 lg:bg-none lg:bg-gray-200 rounded-[30px] lg:pl-8 lg:pt-8 lg:pb-8 lg:pr-2 flex flex-col justify-end lg:justify-between lg:transition-transform duration-1000 ${showFirstSection ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          style={backgroundImageStyle}
        >
          <div className="flex flex-col p-1 lg:justify-start lg:mt-4 z-10">
            <h1 className="text-white font-medium text-3xl max-w-[280px] lg:text-black lg:w-5/6 lg:text-6xl lg:max-w-full">{heading}</h1>
          </div>
          <div className="flex flex-col justify-end p-1 z-10">
            <p className="text-[16px] lg:text-lg text-white lg:text-black max-w-[330px] lg:max-w-[420px]">
              {description}
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[30px] lg:hidden" />
        </div>
        {/* Second section */}
        <div className={`hidden sm:block md:col-span-4 row-span-1 lg:col-span-2 relative rounded-[30px] p-8 transition-transform duration-1000 ${showSecondSection ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <Image src={secondaryImage} alt="Hero image" layout="fill" objectFit="cover" className="rounded-[30px] transform scale-x-[-1]" />
        </div>
        {/* Third section */}
        <Link href={linkUrl} className={`row-span-1 md:col-span-2 lg:col-span-1 bg-black text-white rounded-[30px] hover:bg-gray-200 hover:text-black cursor-pointer p-8 flex justify-center items-center transition-transform duration-1000 ${showThirdSection ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <div className="text-xl lg:text-lg xl:text-2xl lg:flex-col lg:justify-center font-medium flex items-center px-4 py-2">
            {linkText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 lg:ml-0 lg:h-10 lg:w-10 xl:w-16 xl:h-16 lg:self-start" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </div>
      {/* Right side (image) */}
      <div className={`hidden lg:block lg:col-span-3 w-full h-full relative rounded-[30px] transition-transform duration-1000 ${showImage ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <Image src={primaryImage} alt="Hero image" layout="fill" objectFit="cover" className=" rounded-[30px]" />
      </div>
    </div>
  );
};

export default Hero;
