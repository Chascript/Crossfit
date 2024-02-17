'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import { Bullets } from '@/src/types';
import Bullet from '../bullet';

export interface Props {
  heading: string;
  description: string;
  image: string;
  bullets: Bullets[];
}

const MultiplePoints = ({
  heading,
  description,
  image,
  bullets,
}: Props) => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isBullet1Visible, setIsBullet1Visible] = useState(false);
  const [isBullet2Visible, setIsBullet2Visible] = useState(false);
  const [isBullet3Visible, setIsBullet3Visible] = useState(false);
  const [isBullet4Visible, setIsBullet4Visible] = useState(false);
  const [isBullet5Visible, setIsBullet5Visible] = useState(false);
  const [isBullet6Visible, setIsBullet6Visible] = useState(false);
  const [isBullet7Visible, setIsBullet7Visible] = useState(false);

  const [refHeading, headingInView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet1, bullet1InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet2, bullet2InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet3, bullet3InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet4, bullet4InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet5, bullet5InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet6, bullet6InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet7, bullet7InView] = useInView({ threshold: 0.8, triggerOnce: true });

  useEffect(() => {
    if (headingInView) {
      setIsHeadingVisible(true);
    }
  }, [headingInView]);

  useEffect(() => {
    if (bullet1InView) {
      setIsBullet1Visible(true);
    }
  }, [bullet1InView]);

  useEffect(() => {
    if (bullet2InView) {
      setIsBullet2Visible(true);
    }
  }, [bullet2InView]);

  useEffect(() => {
    if (bullet3InView) {
      setIsBullet3Visible(true);
    }
  }, [bullet3InView]);

  useEffect(() => {
    if (bullet4InView) {
      setIsBullet4Visible(true);
    }
  }, [bullet4InView]);

  useEffect(() => {
    if (bullet5InView) {
      setIsBullet5Visible(true);
    }
  }, [bullet5InView]);

  useEffect(() => {
    if (bullet6InView) {
      setIsBullet6Visible(true);
    }
  }, [bullet6InView]);

  useEffect(() => {
    if (bullet7InView) {
      setIsBullet7Visible(true);
    }
  }, [bullet7InView]);

  // Define constants for each position
  const bullet1 = bullets.find((bullet) => bullet.position === 1);
  const bullet2 = bullets.find((bullet) => bullet.position === 2);
  const bullet3 = bullets.find((bullet) => bullet.position === 3);
  const bullet4 = bullets.find((bullet) => bullet.position === 4);
  const bullet5 = bullets.find((bullet) => bullet.position === 5);
  const bullet6 = bullets.find((bullet) => bullet.position === 6);
  const bullet7 = bullets.find((bullet) => bullet.position === 7);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 my-12 mx-10">
      <div className="hidden lg:block lg:p-4" />
      <div ref={refHeading} className={`md:col-span-2 lg:p-4 text-center ${isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="text-[17px] italic mt-3">{description}</p>
      </div>
      <div className="hidden lg:block lg:p-4" />
      <div ref={refBullet1} className={`md:col-span-1 ${bullet1 ? 'block' : 'hidden lg:block'} lg:p-4 ${isBullet1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet1 && (
          <Bullet
            heading={bullet1.heading}
            description={bullet1.description}
          />
        )}
      </div>
      <div className={`md:col-span-1 h-48 md:h-auto relative lg:col-span-2 md:row-span-2 lg:p-4 ${isBullet1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        <Image
          src={image}
          alt="CrossFit ropes"
          className="lg:h-auto w-40 rounded-full overflow-hidden bg-gray-200 border-4 border-gray-200 border-solid shadow-2xl"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div ref={refBullet2} className={`md:col-span-1 ${bullet2 ? 'block' : 'hidden lg:block'} lg:p-4 ${isBullet2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet2 && (
          <Bullet
            heading={bullet2.heading}
            description={bullet2.description}
          />
        )}
      </div>
      <div ref={refBullet3} className={`md:col-span-1 ${bullet3 ? 'block' : 'hidden lg:block'} lg:p-4 ${isBullet3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet3 && (
          <Bullet
            heading={bullet3.heading}
            description={bullet3.description}
          />
        )}
      </div>
      <div ref={refBullet4} className={`md:col-span-1 ${bullet4 ? 'block' : 'hidden lg:block'} lg:p-4 ${isBullet4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet4 && (
          <Bullet
            heading={bullet4.heading}
            description={bullet4.description}
          />
        )}
      </div>
      <div ref={refBullet5} className={`md:col-span-1 ${bullet5 ? 'block' : 'hidden lg:block'} lg:p-4 ${isBullet5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet5 && (
          <Bullet
            heading={bullet5.heading}
            description={bullet5.description}
          />
        )}
      </div>
      <div ref={refBullet6} className={`md:col-span-1 ${bullet6 ? 'block' : 'hidden lg:block'} lg:col-span-2 lg:p-4 lg:flex lg:justify-center ${isBullet6Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        <div className="lg:w-1/2">
          {bullet6 && (
            <Bullet
              heading={bullet6.heading}
              description={bullet6.description}
            />
          )}
        </div>
      </div>
      <div ref={refBullet7} className={`md:col-span-1 ${bullet7 ? 'block' : 'hidden lg:block'} lg:p-4 ${isBullet7Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet7 && (
          <Bullet
            heading={bullet7.heading}
            description={bullet7.description}
          />
        )}
      </div>
    </div>
  );
};

export default MultiplePoints;
