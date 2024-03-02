import React from 'react';
import { MuscleGroupsWorked } from '@/src/types';
import {
  Card, CardBody, CardHeader, Divider,
} from '@nextui-org/react';

interface Props {
  muscleGroupsWorked: MuscleGroupsWorked;
}

export const ExerciseMuscleGroupsWorked: React.FC<Props> = ({ muscleGroupsWorked }) => (
  <Card className="flex flex-1 p-3 rounded-lg shadow-md border border-black-400">
    <CardHeader>
      <h2 className="text-2xl font-semibold">Muscle Groups Worked</h2>
    </CardHeader>
    <CardBody className="space-y-2">
      <div className="flex flex-col sm:flex-row justify-evenly">
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-medium">Primary Muscle Groups</h3>
          <ul className="list-disc">
            {muscleGroupsWorked.primaryMuscleGroups.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
        </div>
        <Divider className="h-inherit" orientation="vertical" />
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">Secondary Muscle Groups</h3>
          <ul className="list-disc">
            {muscleGroupsWorked.secondaryMuscleGroups.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="lg:w-5/6">
        {muscleGroupsWorked.description}
      </p>
    </CardBody>
  </Card>
);

export default ExerciseMuscleGroupsWorked;
