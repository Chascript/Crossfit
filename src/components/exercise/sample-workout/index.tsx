import React from 'react';
import { SampleWorkout } from '@/src/types';

interface Props {
  sampleWorkout: SampleWorkout;
}

export const ExerciseSampleWorkout: React.FC<Props> = ({ sampleWorkout }) => (
  <div>
    <h2>Sample Workout</h2>
    <p>
      <strong>Title:</strong>
      {' '}
      {sampleWorkout.title}
    </p>
    <p>
      <strong>Description:</strong>
      {' '}
      {sampleWorkout.description}
    </p>
    <ol>
      {sampleWorkout.steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  </div>
);

export default ExerciseSampleWorkout;
