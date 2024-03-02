import React from 'react';
import { Movement } from '@/src/types';

interface Props {
  movement: Movement;
}

export const ExerciseMovement: React.FC<Props> = ({ movement }) => (
  <div>
    <h2>Movement</h2>
    <p>
      <strong>Description:</strong>
      {' '}
      {movement.description}
    </p>
    <p>
      <strong>Purpose:</strong>
      {' '}
      {movement.purpose}
    </p>
    <p><strong>Benefits:</strong></p>
    <ul>
      {movement.benefits.map((benefit) => (
        <li key={benefit}>{benefit}</li>
      ))}
    </ul>
    <p>
      <strong>Common Usage:</strong>
      {' '}
      {movement.commonUsage}
    </p>
  </div>
);

export default ExerciseMovement;
