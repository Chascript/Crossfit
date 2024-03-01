import React from 'react';

import { fetchCrossfitExercise } from '@/src/server/crossfitExercises';
import { Exercise } from '@/src/types';
import NotFound from '@/src/app/exercises/not-found';

interface Props {
  crossfitExercise: string;
}

export const ExerciseView = async ({
  crossfitExercise,
}: Props) => {
  const exercise: Exercise | undefined = await fetchCrossfitExercise(crossfitExercise);

  if (!exercise) {
    return NotFound({
      exercise: crossfitExercise,
    });
  }
  return (
    <div className="container flex flex-col gap-4 p-4 mx-20">
      {exercise?.title}
    </div>
  );
};

export default ExerciseView;
