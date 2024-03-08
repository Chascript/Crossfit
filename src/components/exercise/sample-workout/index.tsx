import React from 'react';
import { SampleWorkout } from '@/src/types';
import { Card } from '@nextui-org/react';
import GenerateSchema from '../../generate-schema';

export interface Props {
  sampleWorkout: SampleWorkout;
  equipment?: string[];
}

export const ExerciseSampleWorkout = ({
  sampleWorkout,
  equipment,
}: Props) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ExercisePlan',
    name: sampleWorkout.title,
    description: sampleWorkout.description,
    exercisePlanType: 'http://schema.org/WorkoutPlan',
    exerciseType: 'http://schema.org/PhysicalActivity',
    ...(equipment && { equipment: equipment.join(', ') }),
  };
  const ExercisePlanSchema = <GenerateSchema jsonLd={jsonLd} />;

  return (
    <Card className="p-3 rounded-lg shadow-md border border-black-400">
      <h3 className="text-lg font-medium">{sampleWorkout.title}</h3>
      <div>
        <p>{sampleWorkout.description}</p>
        <h4 className="text-md font-medium">Equipment you will need</h4>
        <ul>
          {' '}
          {equipment ? (
            equipment.map((item) => <li key={item}>{item}</li>)
          ) : (
            <li>Just your body!</li>
          )}
        </ul>
        <h4 className="text-md font-medium">Steps</h4>
        <ul className="list-disc">
          {sampleWorkout.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
      {ExercisePlanSchema}
    </Card>
  );
};

export default ExerciseSampleWorkout;
