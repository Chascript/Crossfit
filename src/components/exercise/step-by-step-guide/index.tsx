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
}: Props) => (
  <Card className=" p-6 rounded-lg shadow-md mb-4 border border-black-400">
    <CardHeader>
      <h2 className="text-2xl font-semibold">
        How To Do A
        {' '}
        {name}
      </h2>
    </CardHeader>
    <CardBody className="space-y-4">
      <ol className="list-decimal pl-6">
        {stepByStepGuide.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
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
    </CardBody>
  </Card>
);

export default ExerciseStepByStepGuide;
