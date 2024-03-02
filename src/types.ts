export type DifficultyValue = 1 | 2 | 3 | 4 | 5;

export type Movement = {
  description: string;
  purpose: string;
  benefits: string[];
  commonUsage: string;
};

export type StepByStepGuide = {
  instructions: string[];
  tips: string[];
  images: string[];
};

export type MuscleGroupsWorked = {
  primaryMuscleGroups: string[];
  secondaryMuscleGroups: string[];
  description: string;
};

export type SampleWorkout = {
  title: string;
  description: string;
  steps: string[];
};

export type Bullets = {
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  heading: string;
  description: string;
}

export type AccorItem = {
  id: number;
  question: string;
  answer: string;
}

export type Exercise = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  difficulty: DifficultyValue;
  movement: Movement;
  stepByStepGuide: StepByStepGuide;
  muscleGroupsWorked: MuscleGroupsWorked;
  commonMistakes: string[];
  scalingOptions: string[];
  safetyTips: string[];
  sampleWorkout: SampleWorkout;
};
