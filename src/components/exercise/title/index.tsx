import React from 'react';

import { Card, CardBody } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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
    <div className="flex flex-col">

      <h1 className="text-5xl font-medium mb-4">{title}</h1>
      <Card className="border border-black-400 rounded-lg p-2 flex">
        <CardBody className="flex flex-row gap-4">
          <FontAwesomeIcon className="w-4" icon={faInfoCircle} />
          <p className="text-lg italic">{description}</p>
        </CardBody>
      </Card>
    </div>

    <div className="flex gap-4 justify-start content-end">
      Difficulty:
      {' '}
      <DifficultyRating value={difficulty} />
    </div>
  </div>

);

export default ExerciseTitle;
