import React from 'react';

import { Card, CardBody } from '@nextui-org/react';
import { DifficultyValue } from '@/src/types';
import DifficultyRating from '../../difficulty-rating';

export interface Props {
  title: string;
  description: string;
  difficulty: DifficultyValue;
}

export const ExerciseTitle = ({
  title,
  description,
  difficulty,
}: Props) => (
  <div className="flex justify-between">
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-col-reverse md:flex-row md:justify-between">
        <h1 className="text-5xl font-medium mb-4">{title}</h1>
        <div className="flex gap-4 justify-start content-end sm:justify-end">
          Difficulty:
          {' '}
          <DifficultyRating value={difficulty} />
        </div>
      </div>
      <Card className="border border-black-400 rounded-lg p-2 flex">
        <CardBody className="flex flex-row gap-4">
          <p className="text-lg italic">{description}</p>
        </CardBody>
      </Card>
    </div>
  </div>

);

export default ExerciseTitle;
