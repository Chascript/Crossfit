import React from 'react';
import { StepByStepGuide } from '@/src/types';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

export interface Props {
  name: string;
  stepByStepGuide: StepByStepGuide;
}

export const ExerciseStepByStepGuide = ({
  name,
  stepByStepGuide,
}: Props) => {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'HowTo',
    name: `How to do a ${name}`,
    description: stepByStepGuide.description,
    step: stepByStepGuide.instructions.map((instruction, index) => ({
      '@type': 'HowToStep', text: instruction, name: `Step ${index + 1}`, url: `https://crossfit-delta.vercel.app/exercises/${name}#step-${index + 1}`,
    })),
  };

  return (
    <Card className="p-6 rounded-lg shadow-md mb-4 border border-black-400">
      <CardHeader>
        <h2 className="text-2xl font-semibold">
          How To Do A
          {' '}
          {name}
        </h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <p>{stepByStepGuide.description}</p>
        <ol className="list-decimal pl-6">
          {stepByStepGuide.instructions.map((instruction, i) => (
            <li id={`step-${i + 1}`} key={instruction}>{instruction}</li>
          ))}
        </ol>
        <div>
          <h3 className="text-lg font-semibold mb-2">Tips</h3>
          <ul className="list-disc">
            {stepByStepGuide.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </CardBody>
    </Card>
  );
};

export default ExerciseStepByStepGuide;
