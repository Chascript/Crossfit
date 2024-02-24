import React from 'react';
import { Divider } from '@nextui-org/react';
import { Hero } from '../components/hero';

import crossfitTyreImage from '../../public/banners/home-hero-1.jpg';
import crossfitRopesImage from '../../public/banners/crossfit-ropes.jpg';
import fistBump from '../../public/images/fist-bump.jpg';

import MultiplePoints from '../components/multiple-points';
import { AccorItem, Bullets } from '../types';
import CrossfitAccordion from '../components/crossfit-accordion';
import WorkoutOfTheDayView from '../containers/workoutOfTheDayView';

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
    description: "CrossFit is more than just a workout; it's a community of like-minded individuals who support and encourage each other to reach their fitness goals.",
  },
  {
    position: 6,
    heading: 'Workouts Tailored to Every Level',
    description: 'CrossFit workouts are designed to be scalable, meaning that they can be adapted to suit any fitness level, from beginners to elite athletes.',
  },
];
const accorItems: AccorItem[] = [
  {
    id: 1,
    question: 'How is CrossFit is different from other fitness programs?',
    answer:
      'CrossFit is a high-intensity fitness program that incorporates elements of weightlifting, cardio, and gymnastics. It focuses on functional movements performed at high intensity to improve overall fitness. Unlike traditional gym workouts, CrossFit workouts are constantly varied and aim to prepare you for any physical challenge.',
  },
  {
    id: 2,
    question: 'Is CrossFit suitable for beginners?',
    answer:
      'Yes, CrossFit is suitable for beginners! CrossFit workouts can be scaled to accommodate individuals of all fitness levels and abilities. Whether you\'re new to fitness or have been training for years, CrossFit can be tailored to help you reach your goals.',
  },
  {
    id: 3,
    question: 'What can I expect from a CrossFit class?',
    answer:
      'CrossFit classes typically involve a warm-up, skill or strength training, the workout of the day (WOD), and a cool-down. Each class is led by a certified coach who will guide you through the movements and provide modifications as needed.',
  },
  {
    id: 4,
    question: 'Will I get injured doing CrossFit?',
    answer:
      "Like any physical activity, there is a risk of injury in CrossFit. However, with proper coaching, technique instruction, and scaling options, the risk of injury can be minimized. It's important to listen to your body, communicate any concerns with your coach, and prioritize safety during workouts.",
  },
  {
    id: 5,
    question: 'Do I need to be in shape before starting CrossFit?',
    answer:
      'No, you do not need to be in shape before starting CrossFit. CrossFit is designed to improve fitness and can be adapted to any starting point. Whether you\'re a complete beginner or an experienced athlete, CrossFit can help you progress towards your fitness goals.',
  },
  {
    id: 6,
    question: 'How often should I do CrossFit workouts?',
    answer:
      'The frequency of your CrossFit workouts will depend on your fitness goals, schedule, and recovery needs. Many people start with 3-4 workouts per week and gradually increase frequency as they become more comfortable with the program.',
  },
  {
    id: 7,
    question: 'What kind of results can I expect from CrossFit?',
    answer:
      'CrossFit can lead to improvements in strength, endurance, flexibility, agility, and overall fitness. With consistent effort and dedication, you can expect to see progress in your performance, body composition, and overall health.',
  },
  {
    id: 8,
    question: 'Is CrossFit expensive?',
    answer:
      'The cost of CrossFit classes varies depending on the location and the facility. While CrossFit memberships may be more expensive than traditional gym memberships, they often include coaching, programming, and a supportive community that can help you achieve your fitness goals.',
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
    <Divider className="w-5/6 m-auto" />
    <MultiplePoints
      heading="Core Principles"
      description="CrossFit's core principles ensure adaptable, comprehensive fitness for all levels, promoting lasting health and growth"
      image={fistBump.src}
      bullets={CorePrinciples}
    />
    <Divider className="w-5/6 m-auto" />
    <WorkoutOfTheDayView />
    <Divider className="w-5/6 m-auto" />
    <CrossfitAccordion
      title="Crossfit FAQs"
      subText="At Crossfit Info, we understand that starting a new fitness journey can raise questions. Here, we provide answers to some of the most frequently asked questions about CrossFit, classes, equipment, and more:"
      accordionBody={accorItems}
    />
  </>
);

export default HomePage;
