import React from 'react';
import {
  Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider,
} from '@nextui-org/react';

export interface Props {
  isScaled: boolean;
  setIsScaled: (isScaled: boolean) => void;
}

export const WorkoutOfTheDayCard = ({ isScaled, setIsScaled }: Props) => {
  const workout = {
    standard: [
      {
        name: 'Power Clean',
        reps: 5,
        weight: '135 lbs',
      },
      {
        name: 'Push Press',
        reps: 10,
        weight: '95 lbs',
      },
      {
        name: 'Toes-to-Bar',
        reps: 15,
        weight: 'Bodyweight',
      },
    ],
    scaled: [
      {
        name: 'Dumbbell Power Clean',
        reps: 5,
        weight: '35 lbs',
      },
      {
        name: 'Push Press',
        reps: 10,
        weight: '40 lbs',
      },
      {
        name: 'Hanging Knee Raises',
        reps: 15,
        weight: 'Assisted as needed',
      },
    ],
    rounds: 5,
    type: 'AMRAP',
  };

  const workoutFormat = 'AMRAP in 13 minutes';

  return (
    <Card className="max-w-[400px] w-full bg-gray-100 shadow-lg rounded-lg">
      <CardHeader className="bg-gray-700 text-white py-4 px-6 rounded-t-lg font-medium">
        <h3>
          Workout Of The Day
          {isScaled ? ' (Scaled)' : ' (Rx)'}
        </h3>
      </CardHeader>
      <Divider className="border-gray-700" />
      <CardBody className="flex flex-col text-gray-200 bg-gray-800 p-6">
        <ul>
          {workout[isScaled ? 'scaled' : 'standard'].map((exercise) => (
            <li key={exercise.name}>
              {exercise.reps}
              {' '}
              {exercise.name}
              {' '}
              (
              {exercise.weight}
              )
            </li>
          ))}
        </ul>
        <p className="text-gray-300">
          {workout.rounds}
          {' '}
          rounds of
          {' '}
          {workout.type}
        </p>
        <p className="text-gray-300">{workoutFormat}</p>
      </CardBody>
      <Divider className="border-gray-700" />
      <CardFooter className="flex justify-center bg-gray-700 py-4 rounded-b-lg">
        <ButtonGroup className="flex flex-wrap">
          <Button onClick={() => setIsScaled(true)} disabled={isScaled} className="bg-gray-800 text-white hover:bg-gray-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:hover:bg-gray-600 disabled:hover:text-gray-400">
            Scaled
          </Button>
          <Button onClick={() => setIsScaled(false)} disabled={!isScaled} className="bg-gray-800 text-white hover:bg-gray-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:hover:bg-gray-600 disabled:hover:text-gray-400">
            Rx
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default WorkoutOfTheDayCard;
