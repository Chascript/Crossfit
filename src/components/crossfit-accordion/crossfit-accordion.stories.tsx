import type { Meta, StoryObj } from '@storybook/react';
import { CrossfitAccordion } from '.';

const meta: Meta<typeof CrossfitAccordion> = {
  component: CrossfitAccordion,
  title: 'Components/CrossfitAccordion',
  args: {
    accordionBody: [
      {
        id: 1,
        question: 'Question 1',
        answer: 'Answer 1',
      },
      {
        id: 2,
        question: 'Question 2',
        answer: 'Answer 2',
      },
      {
        id: 3,
        question: 'Question 3',
        answer: 'Answer 3',
      },
      {
        id: 4,
        question: 'Question 4',
        answer: 'Answer 4',
      },
      {
        id: 5,
        question: 'Question 5',
        answer: 'Answer 5',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof CrossfitAccordion>;

export const Default: Story = {
  args: {},
};

export const WithTitle: Story = {
  args: {
    title: 'Frequently Asked Questions',
  },
};

export const WithSubText: Story = {
  args: {
    subText: 'Here are some frequently asked questions:',
  },
};

export const WithTitleAndSubText: Story = {
  args: {
    title: 'Frequently Asked Questions',
    subText: 'Here are some frequently asked questions:',
  },
};

export const CrossFitFAQs: Story = {
  args: {
    title: 'Crossfit FAQs',
    subText: 'At Crossfit Info, we understand that starting a new fitness journey can raise questions. Here, we provide answers to some of the most frequently asked questions about CrossFit, classes, equipment, and more:',
    accordionBody: [
      {
        id: 1,
        question: 'What is CrossFit?',
        answer: 'CrossFit is a high-intensity fitness program that combines elements of weightlifting, gymnastics, and cardiovascular training. It is designed to improve overall fitness and physical performance.',
      },
      {
        id: 2,
        question: 'Is CrossFit suitable for beginners?',
        answer: 'Yes, CrossFit can be adapted to any fitness level. Coaches can modify workouts to accommodate beginners and provide instruction on proper technique and form.',
      },
      {
        id: 3,
        question: 'What are the benefits of CrossFit?',
        answer: 'CrossFit can lead to improvements in strength, endurance, flexibility, agility, and overall fitness. With consistent effort and dedication, you can expect to see progress in your performance, body composition, and overall health.',
      },
      {
        id: 4,
        question: 'Will I get injured doing CrossFit?',
        answer: "Like any physical activity, there is a risk of injury in CrossFit. However, with proper coaching, technique instruction, and scaling options, the risk of injury can be minimized. It's important to listen to your body, communicate any concerns with your coach, and prioritize safety during workouts.",
      },
      {
        id: 5,
        question: 'Do I need to be in shape before starting CrossFit?',
        answer: 'No, you do not need to be in shape before starting CrossFit. CrossFit is designed to improve fitness and can be adapted to any starting point. Whether you\'re a complete beginner or an experienced athlete, CrossFit can help you progress towards your fitness goals.',
      },
      {
        id: 6,
        question: 'How often should I do CrossFit workouts?',
        answer: 'The frequency of your CrossFit workouts will depend on your fitness goals, schedule, and recovery needs. Many people start with 3-4 workouts per week and gradually increase frequency as they become more comfortable with the program.',
      },
      {
        id: 7,
        question: 'What kind of results can I expect from CrossFit?',
        answer: 'CrossFit can lead to improvements in strength, endurance, flexibility, agility, and overall fitness. With consistent effort and dedication, you can expect to see progress in your performance, body composition, and overall health.',
      },
      {
        id: 8,
        question: 'Is CrossFit expensive?',
        answer: 'The cost of CrossFit classes varies depending on the location and the facility. While CrossFit memberships may be more expensive than traditional gym memberships, they often include coaching, programming, and a supportive community that can help you achieve your fitness goals.',
      },
    ],
  },
};
