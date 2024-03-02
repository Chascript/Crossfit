import React from 'react';

interface Props {
  safetyTips: string[];
}

export const SafetyTips: React.FC<Props> = ({ safetyTips }) => (
  <div>
    <h2>Safety Tips</h2>
    <ul>
      {safetyTips.map((tip) => (
        <li key={tip}>{tip}</li>
      ))}
    </ul>
  </div>
);

export default SafetyTips;
