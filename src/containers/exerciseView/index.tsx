import React from 'react';

import BulletList from '@/src/components/bullet-list';
import { Card } from '@nextui-org/react';
import { ExerciseTags } from '@/src/components/tags';
import { fetchCrossfitExercise } from '../../server/crossfitExercises';
import { Exercise } from '../../types';
import NotFound from '../../app/exercises/not-found';

import ExerciseTitle from '../../components/exercise/title';
import { ExerciseMovement } from '../../components/exercise/movement';
import { ExerciseStepByStepGuide } from '../../components/exercise/step-by-step-guide';
import { ExerciseMuscleGroupsWorked } from '../../components/exercise/muscle-groups-worked';
import { ExerciseSampleWorkout } from '../../components/exercise/sample-workout';

export interface Props {
  crossfitExercise: string;
}

export const ExerciseView = async ({ crossfitExercise }: Props) => {
  const exercise: Exercise | undefined = await fetchCrossfitExercise(crossfitExercise);

  if (!exercise) {
    return <NotFound exercise={crossfitExercise} />;
  }

  return (
    <div className="container flex flex-col gap-4 mx-2 sm:mx-auto my-8">
      <ExerciseTitle
        title={exercise.title}
        description={exercise.description}
        difficulty={exercise.difficulty}
      />
      <div className="flex flex-col lg:flex-row gap-4">
        <ExerciseMovement movement={exercise.movement} />
        <ExerciseMuscleGroupsWorked muscleGroupsWorked={exercise.muscleGroupsWorked} />
      </div>
      <ExerciseStepByStepGuide name={exercise.title} stepByStepGuide={exercise.stepByStepGuide} />
      <Card className="p-6 rounded-lg shadow-md border border-black-400">
        <BulletList
          heading="Common Mistakes"
          list={exercise.commonMistakes}
          underlined={false}
        />
      </Card>
      <Card className="p-6 rounded-lg shadow-md border border-black-400">
        <BulletList
          heading="ScalingOptions"
          list={exercise.scalingOptions}
          underlined={false}
        />
      </Card>
      <Card className="p-6 rounded-lg shadow-md border border-black-400">
        <BulletList
          heading="Safety Tips"
          list={exercise.safetyTips}
          underlined={false}
        />
      </Card>
      <ExerciseSampleWorkout
        sampleWorkout={exercise.sampleWorkout}
        equipment={exercise.equipment}
      />
      <Card className="p-3 rounded-lg shadow-md border border-black-400">
        <ExerciseTags tags={exercise.tags} />
      </Card>
    </div>
  );
};

export default ExerciseView;
