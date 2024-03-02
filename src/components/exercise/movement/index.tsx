import React from 'react';
import { Movement } from '@/src/types';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

interface Props {
  movement: Movement;
}

export const ExerciseMovement: React.FC<Props> = ({ movement }) => (
  <Card className="flex flex-1 p-3 shadow-md border border-black-400">
    <CardHeader>
      <h2 className="text-2xl font-semibold pb-0">Movement</h2>
    </CardHeader>
    <CardBody className="space-y-1">
      <p>
        {movement.description}
      </p>
      <div>
        <h3 className="text-lg font-medium">
          Purpose
        </h3>
        {' '}
        <p>
          {movement.purpose}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium">
          Benefits
        </h3>
        <ul className="list-disc pl-5">
          {movement.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-medium">
          Common Usage
        </h3>
        {' '}
        <p>
          {movement.commonUsage}
        </p>
      </div>
    </CardBody>
  </Card>
);

export default ExerciseMovement;
