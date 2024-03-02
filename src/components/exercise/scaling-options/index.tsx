import React from 'react';

interface Props {
  scalingOptions: string[];
}

export const ScalingOptions: React.FC<Props> = ({ scalingOptions }) => (
  <div>
    <h2>Scaling Options</h2>
    <ul>
      {scalingOptions.map((option) => (
        <li key={option}>{option}</li>
      ))}
    </ul>
  </div>
);

export default ScalingOptions;
