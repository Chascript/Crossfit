'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { AccorItem } from '@/src/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

interface Props {
  accordionBody: AccorItem[];
  title?: string;
  subText?: string;
}

export const CrossfitAccordion = ({
  accordionBody,
  title,
  subText,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  const itemClasses = {
    base: 'px-2 w-full',
    title: 'font-medium text-lg',
    trigger: 'data-[hover=true]:bg-default-100 rounded-lg flex items-center',
    indicator: 'text-medium',
    content: 'text-base font-normal px-4',
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (accordionRef.current) {
      observer.observe(accordionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (

    <div ref={accordionRef} className={`mx-10 my-12 transition-transform duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-52'}`}>
      {title && <h2 className="text-3xl font-medium pl-0 pt-0 p-4">{title}</h2>}
      {subText && <p className="text-base mb-3 max-w-4xl">{subText}</p>}
      <Accordion
        variant="shadow"
        itemClasses={itemClasses}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: 'auto',
              transition: {
                height: {
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  duration: 2,
                },
                opacity: {
                  easings: 'ease',
                  duration: 2,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: 'ease',
                  duration: 0.75,
                },
                opacity: {
                  easings: 'ease',
                  duration: 0.9,
                },
              },
            },
          },
        }}
      >
        {accordionBody.map((item) => (
          <AccordionItem
            indicator={<FontAwesomeIcon icon={faDumbbell} />}
            key={item.id.toString()}
            aria-label={`Accordion item ${item.id}`}
            title={item.question}
          >
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CrossfitAccordion;
