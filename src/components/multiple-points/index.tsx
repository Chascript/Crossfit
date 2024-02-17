'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Bullets } from '@/src/types';
import { useInView } from 'react-intersection-observer';
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
  const [isBulletGroup1Visible, setIsBulletGroup1Visible] = useState(false);
  const [isBulletGroup3Visible, setIsBulletGroup3Visible] = useState(false);
  const [isBulletGroup5Visible, setIsBulletGroup5Visible] = useState(false);

  const [refHeading, headingInView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet1, bullet1InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet3, bullet3InView] = useInView({ threshold: 0.8, triggerOnce: true });
  const [refBullet5, bullet5InView] = useInView({ threshold: 0.8, triggerOnce: true });

  useEffect(() => {
    if (headingInView) {
      setIsHeadingVisible(true);
    }
  }, [headingInView]);

  useEffect(() => {
    if (bullet1InView) {
      setIsBulletGroup1Visible(true);
    }
  }, [bullet1InView]);

  useEffect(() => {
    if (bullet3InView) {
      setIsBulletGroup3Visible(true);
    }
  }, [bullet3InView]);

  useEffect(() => {
    if (bullet5InView) {
      setIsBulletGroup5Visible(true);
    }
  }, [bullet5InView]);

  // Define constants for each position
  const bullet1 = bullets.find((bullet) => bullet.position === 1);
  const bullet2 = bullets.find((bullet) => bullet.position === 2);
  const bullet3 = bullets.find((bullet) => bullet.position === 3);
  const bullet4 = bullets.find((bullet) => bullet.position === 4);
  const bullet5 = bullets.find((bullet) => bullet.position === 5);
  const bullet6 = bullets.find((bullet) => bullet.position === 6);
  const bullet7 = bullets.find((bullet) => bullet.position === 7);

  return (
    <div className="grid grid-cols-4 gap-4 my-12 mx-10">
      <div className="p-4" />
      <div ref={refHeading} className={`col-span-2 p-4 text-center ${isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="text-[17px] italic mt-3">{description}</p>
      </div>
      <div className="p-4" />
      <div ref={refBullet1} className={`p-4 ${isBulletGroup1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet1 && (
          <Bullet
            heading={bullet1.heading}
            description={bullet1.description}
          />
        )}
      </div>
      <div className={`relative col-span-2 row-span-2 p-4 ${isBulletGroup1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        <Image
          src={image}
          alt="CrossFit ropes"
          className="w-40 rounded-full overflow-hidden bg-gray-200 border-4 border-gray-200 border-solid shadow-2xl"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`p-4 ${isBulletGroup1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet2 && (
          <Bullet
            heading={bullet2.heading}
            description={bullet2.description}
          />
        )}
      </div>
      <div ref={refBullet3} className={`p-4 ${isBulletGroup3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet3 && (
          <Bullet
            heading={bullet3.heading}
            description={bullet3.description}
          />
        )}
      </div>
      <div className={`p-4 ${isBulletGroup3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet4 && (
          <Bullet
            heading={bullet4.heading}
            description={bullet4.description}
          />
        )}
      </div>
      <div ref={refBullet5} className={`p-4 ${isBulletGroup5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        {bullet5 && (
          <Bullet
            heading={bullet5.heading}
            description={bullet5.description}
          />
        )}
      </div>
      <div className={`col-span-2 p-4 flex justify-center ${isBulletGroup5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
        <div className="w-1/2">
          {bullet6 && (
            <Bullet
              heading={bullet6.heading}
              description={bullet6.description}
            />
          )}
        </div>
      </div>
      <div className={`p-4 ${isBulletGroup5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 transition-transform`}>
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
