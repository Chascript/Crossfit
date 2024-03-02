import React from 'react';

import { ExerciseView } from '../../../containers/exerciseView';

export default function page({ params }: { params: { exercise: string } }) {
  return (
    <ExerciseView crossfitExercise={params.exercise} />
  );
}
