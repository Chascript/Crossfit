import React from 'react';
import { MuscleGroupsWorked } from '@/src/types';

interface Props {
  muscleGroupsWorked: MuscleGroupsWorked;
}

export const ExerciseMuscleGroupsWorked: React.FC<Props> = ({ muscleGroupsWorked }) => (
  <div>
    <h2>Muscle Groups Worked</h2>
    <p>
      <strong>Primary Muscle Groups:</strong>
      {' '}
      {muscleGroupsWorked.primaryMuscleGroups.join(', ')}
    </p>
    <p>
      <strong>Secondary Muscle Groups:</strong>
      {' '}
      {muscleGroupsWorked.secondaryMuscleGroups.join(', ')}
    </p>
    <p>
      <strong>Description:</strong>
      {' '}
      {muscleGroupsWorked.description}
    </p>
    {/* Optionally, you can include a visual representation here */}
  </div>
);

export default ExerciseMuscleGroupsWorked;
