import React from 'react';
import { MuscleGroupsWorked } from '@/src/types';
import {
  Card, CardBody, CardHeader, Divider,
} from '@nextui-org/react';
import BulletList from '../../bullet-list';

interface Props {
  muscleGroupsWorked: MuscleGroupsWorked;
}

export const ExerciseMuscleGroupsWorked = ({
  muscleGroupsWorked,
}: Props) => (
  <Card className="flex flex-1 p-3 rounded-lg shadow-md border border-black-400">
    <CardHeader>
      <h2 className="text-2xl font-semibold">Muscle Groups Worked</h2>
    </CardHeader>
    <CardBody className="space-y-2">
      <div className="flex flex-col sm:flex-row justify-evenly">
        <div className="flex flex-col justify-start">
          <BulletList
            heading="Primary Muscle Groups"
            list={muscleGroupsWorked.primaryMuscleGroups}
            underlined={false}
          />
        </div>
        <Divider className="h-inherit" orientation="vertical" />
        <div className="flex flex-col">
          <BulletList
            heading="Secondary Muscle Groups"
            list={muscleGroupsWorked.secondaryMuscleGroups}
            underlined={false}
          />
        </div>
      </div>
      <p className="lg:w-5/6">
        {muscleGroupsWorked.description}
      </p>
    </CardBody>
  </Card>
);

export default ExerciseMuscleGroupsWorked;
