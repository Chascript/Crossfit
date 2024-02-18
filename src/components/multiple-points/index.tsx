'use client';

import React, {
  useState, useEffect, useRef, ReactNode,
} from 'react';
import Image from 'next/image';
import { Bullets } from '@/src/types';
import Bullet from '../bullet';

interface Props {
  heading: string;
  description: string;
  image: string;
  bullets: Bullets[];
}

export const MultiplePoints = ({
  heading,
  description,
  image,
  bullets,
}: Props) => {
  const [imageInView, setImageInView] = useState<boolean>(false);
  const [headingInView, setheadingInView] = useState<boolean>(false);
  const [inViewArray, setInViewArray] = useState<boolean[]>([]);

  const refsArray = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.className.includes('image-container')) {
            setImageInView(true);
          } else if (entry.target.className.includes('heading-container')) {
            setheadingInView(true);
          } else if (entry.target instanceof HTMLElement && entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setInViewArray((prevInViewArray) => {
              const newInViewArray = [...prevInViewArray];
              newInViewArray[index] = true;
              return newInViewArray;
            });
          }
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    refsArray.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const bulletElements: ReactNode[] = [];
  bulletElements.push(
    <div
      key="image"
      className="order-last lg:order-5 md:col-span-1 h-48 md:h-auto relative lg:col-span-2 md:row-span-2 lg:p-4"
    >
      <div ref={imageRef} className={`image-container ${imageInView ? 'transition-opacity opacity-100' : 'opacity-0'} duration-700 delay-300`}>
        <Image
          src={image}
          alt="CrossFit ropes"
          className="lg:h-auto w-40 rounded-full overflow-hidden bg-gray-200 border-4 border-gray-200 border-solid shadow-2xl"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>,
  );

  for (let i = 0; i < 8; i += 1) {
    const bullet = bullets.find((b) => b.position === (i + 1));
    bulletElements.push(
      (bullet?.position === (i + 1)) ? (
        <div
          key={i}
          ref={(el) => {
            if (el) {
              el.dataset.index = i.toString();
              refsArray.current[i] = el;
            }
          }}
          style={{ order: i > 4 ? i + 5 : i + 4 }}
          className={`lg:col-span-${i === 5 ? '2' : '1'} ${inViewArray[i] ? 'grid transition-opacity duration-700 opacity-100 delay-300' : ' lg:block opacity-0'} lg:p-4`}
        >
          {bullet.position === 6 ? (
            <div className="lg:w-1/2 lg:m-auto">
              <Bullet heading={bullet.heading} description={bullet.description} />
            </div>
          ) : (
            <Bullet heading={bullet.heading} description={bullet.description} />
          )}

        </div>
      ) : (
        <div style={{ order: i > 4 ? i + 5 : i + 4 }} key={i} className={`hidden lg:grid lg:col-span-${i === 5 ? '2' : '1'} ${inViewArray[i] ? 'grid transition-opacity duration-700 opacity-100 delay-300' : ' lg:block opacity-0'} lg:p-4`} />
      ),
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 my-12 mx-10">
      <div className="order-1 hidden lg:block lg:p-4" />
      <div ref={headingRef} className={`heading-container order-2 md:col-span-2 lg:p-4 text-center ${headingInView ? 'transition-opacity opacity-100' : 'opacity-0'} duration-700 delay-300`}>
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="text-[17px] italic mt-3">{description}</p>
      </div>
      <div className="order-3 hidden lg:block lg:p-4" />
      {bulletElements}
    </div>
  );
};

export default MultiplePoints;
