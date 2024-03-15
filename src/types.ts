export type DifficultyValue = 1 | 2 | 3 | 4 | 5;

export type Movement = {
  description: string;
  purpose: string;
  benefits: string[];
  commonUsage: string;
};

export type Step = {
  name: string;
  step: string;
}

export type StepByStepGuide = {
  description: string;
  instructions: Step[];
  tips: string[];
  images?: string[];
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
  equipment?: string[];
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

export type ExerciseNav = {
  title: string;
  link: string;
};
