import React from 'react';
import { fetchCrossfitExercise } from '@/src/server/crossfitExercises';
import { Exercise } from '@/src/types';
import NotFound from '@/src/app/exercises/not-found';

import ExerciseTitle from '@/src/components/exercise/title';
import { ExerciseMovement } from '@/src/components/exercise/movement';
import { ExerciseStepByStepGuide } from '../../components/exercise/step-by-step-guide';
import { ExerciseMuscleGroupsWorked } from '../../components/exercise/muscle-groups-worked';
import { CommonMistakes } from '../../components/exercise/common-mistakes';
import { ScalingOptions } from '../../components/exercise/scaling-options';
import { SafetyTips } from '../../components/exercise/safety-tips';
import { ExerciseSampleWorkout } from '../../components/exercise/sample-workout';

interface Props {
  crossfitExercise: string;
}

export const ExerciseView = async ({ crossfitExercise }: Props) => {
  const exercise: Exercise | undefined = await fetchCrossfitExercise(crossfitExercise);

  if (!exercise) {
    return <NotFound exercise={crossfitExercise} />;
  }

  return (
    <div className="container mx-auto mt-8">
      <ExerciseTitle
        title={exercise.title}
        description={exercise.description}
        difficulty={exercise.difficulty}
      />
      <ExerciseMovement movement={exercise.movement} />
      <ExerciseStepByStepGuide stepByStepGuide={exercise.stepByStepGuide} />
      <ExerciseMuscleGroupsWorked muscleGroupsWorked={exercise.muscleGroupsWorked} />
      <CommonMistakes commonMistakes={exercise.commonMistakes} />
      <ScalingOptions scalingOptions={exercise.scalingOptions} />
      <SafetyTips safetyTips={exercise.safetyTips} />
      <ExerciseSampleWorkout sampleWorkout={exercise.sampleWorkout} />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="mb-4">
            <strong>Tags:</strong>
            {' '}
            {exercise.tags.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseView;
