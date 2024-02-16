import React from 'react';

import ExerciseView from '../containers/exerciseView';
import { fetchCrossfitExercises } from '../server/crossfitExercises';

export default async function Page() {
  const crossfitExercisesList = await fetchCrossfitExercises();
  return (
    <ExerciseView crossfitExercises={crossfitExercisesList} />
  );
}
