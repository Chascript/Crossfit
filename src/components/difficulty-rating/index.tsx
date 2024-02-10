import { DifficultyValue } from '@/src/types';
import React from 'react';

interface Props {
  value: DifficultyValue;
}

const DifficultyRating = ({
  value,
}: Props) => {
  let color: string;

  switch (value) {
    case 1:
      color = 'green';
      break;
    case 2:
      color = 'lightgreen';
      break;
    case 3:
      color = 'orange';
      break;
    case 4:
      color = 'orangered';
      break;
    case 5:
      color = 'red';
      break;
    default:
      color = 'black';
  }

  return (
    <div style={{ color }}>
      {Array.from({ length: value }, (_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
};

export default DifficultyRating;
