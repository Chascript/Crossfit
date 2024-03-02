import React from 'react';
import { StepByStepGuide } from '@/src/types';

interface Props {
  stepByStepGuide: StepByStepGuide;
}

export const ExerciseStepByStepGuide: React.FC<Props> = ({ stepByStepGuide }) => (
  <div>
    <h2>Step-by-Step Guide</h2>
    <ol>
      {stepByStepGuide.instructions.map((instruction) => (
        <li key={instruction}>{instruction}</li>
      ))}
    </ol>
    <h3>Tips:</h3>
    <ul>
      {stepByStepGuide.tips.map((tip) => (
        <li key={tip}>{tip}</li>
      ))}
    </ul>
    {/* Optionally, you can include images or videos here */}
  </div>
);

export default ExerciseStepByStepGuide;
