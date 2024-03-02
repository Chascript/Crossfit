import React from 'react';
import { Movement } from '@/src/types';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Bullet from '../../bullet';
import BulletList from '../../bullet-list';

interface Props {
  movement: Movement;
}

export const ExerciseMovement = ({
  movement,
}: Props) => (
  <Card className="flex flex-1 p-3 shadow-md border border-black-400">
    <CardHeader>
      <h2 className="text-2xl font-semibold pb-0">Movement</h2>
    </CardHeader>
    <CardBody className="space-y-1">
      <p>
        {movement.description}
      </p>
      <Bullet
        heading="Purpose"
        description={movement.purpose}
        underlined={false}
      />
      <BulletList
        heading="Benefits"
        list={movement.benefits}
        underlined={false}
      />
      <Bullet
        heading="Common Usage"
        description={movement.commonUsage}
        underlined={false}
      />
    </CardBody>
  </Card>
);

export default ExerciseMovement;
