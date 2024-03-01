import crossfitExercises from './exerciseExamples';

export const fetchCrossfitExercises = async () => {
  const fetchedCrossfitExercises = await crossfitExercises;
  return fetchedCrossfitExercises;
};

export const fetchCrossfitExercise = async (exercise: string) => {
  const fetchedCrossfitExercise = await crossfitExercises.find((ex) => ex.title.toLowerCase() === exercise);
  if (fetchedCrossfitExercise) return fetchedCrossfitExercise;
  return undefined;
};

export default { fetchCrossfitExercises, fetchCrossfitExercise };
