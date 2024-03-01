import React from 'react';

import ExerciseListView from '../../containers/exerciseListView';
import { fetchCrossfitExercises } from '../../server/crossfitExercises';

export default async function Page() {
  const crossfitExercisesList = await fetchCrossfitExercises();
  return (
    <ExerciseListView crossfitExercises={crossfitExercisesList} />
  );
}
