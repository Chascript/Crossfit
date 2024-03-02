import React from 'react';

interface Props {
  commonMistakes: string[];
}

export const CommonMistakes: React.FC<Props> = ({ commonMistakes }) => (
  <div>
    <h2>Common Mistakes</h2>
    <ul>
      {commonMistakes.map((mistake) => (
        <li key={mistake}>{mistake}</li>
      ))}
    </ul>
  </div>
);

export default CommonMistakes;
