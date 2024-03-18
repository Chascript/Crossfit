'use client';

import React, { useState } from 'react';

import { WorkoutOfTheDay } from '@/src/types';
import {
  Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider,
} from '@nextui-org/react';
import OpenAIIcon from '../icons/openai';

export interface Props {
  workout: WorkoutOfTheDay;
}

export const WorkoutOfTheDayCard = ({
  workout,
}: Props) => {
  const { rounds, type, time } = workout;
  const [isScaled, setIsScaled] = useState(false);

  return (
    workout && (
      <Card className="max-w-[400px] w-full bg-gray-100 shadow-lg rounded-lg">
        <CardHeader className="bg-gray-700 text-white py-4 px-6 rounded-t-lg font-medium justify-between">
          <h3>
            Workout Of The Day
            {isScaled ? ' (Scaled)' : ' (Rx)'}
          </h3>
          <div className="w-2">
            <OpenAIIcon />
          </div>
        </CardHeader>
        <Divider className="border-gray-700" />
        <CardBody className="flex flex-col text-gray-200 bg-gray-800 p-6">
          <ul>
            {workout[isScaled ? 'scaled' : 'standard']?.map((exercise : any) => (
              <li key={exercise.name}>
                {exercise.reps}
                {' '}
                {exercise.name}
                {' '}
                (
                {exercise.weight.length > 0 && exercise.weight}
                )
              </li>
            ))}
          </ul>
          <p className="text-gray-300">
            {(rounds && type !== 'AMRAP') && `${rounds} rounds`}
          </p>
          <p className="text-gray-300">{time}</p>
          <p className="text-gray-300">{type}</p>
        </CardBody>
        <Divider className="border-gray-700" />
        <CardFooter className="flex flex-col space-y-5 items-center justify-center bg-gray-700 py-4 rounded-b-lg">
          <ButtonGroup className="flex flex-wrap">
            <Button onClick={() => setIsScaled(false)} disabled={!isScaled} className="bg-gray-800 text-white hover:bg-gray-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:hover:bg-gray-600 disabled:hover:text-gray-400">
              Rx
            </Button>
            <Button onClick={() => setIsScaled(true)} disabled={isScaled} className="bg-gray-800 text-white hover:bg-gray-600 disabled:bg-gray-600 disabled:text-gray-400 disabled:hover:bg-gray-600 disabled:hover:text-gray-400">
              Scaled
            </Button>
          </ButtonGroup>
          <p className="text-gray-300 self-end text-right text-xs">
            WOTD is powered by OpenAI, it will update each day at 00:00 UTC.
          </p>
        </CardFooter>
      </Card>
    )
  );
};

export default WorkoutOfTheDayCard;
