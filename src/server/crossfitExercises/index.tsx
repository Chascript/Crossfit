import crossfitExercises from './exerciseExamples';

export const fetchCrossfitExercises = async () => {
  const fetchedCrossfitExercises = await crossfitExercises;
  return fetchedCrossfitExercises;
};

export const fetchCrossfitExercise = async (exercise: string) => {
  const fetchedCrossfitExercise = await crossfitExercises.find((ex) => ex.link.toLowerCase() === exercise);
  if (fetchedCrossfitExercise) return fetchedCrossfitExercise;
  return undefined;
};

export const fetchCrossfitExerciseNav = async () => {
  const fetchedCrossfitExerciseNav = await crossfitExercises.map((ex) => ({
    title: ex.title,
    description: ex.description,
    link: ex.link,
  }));
  return fetchedCrossfitExerciseNav;
};

export default { fetchCrossfitExercises, fetchCrossfitExercise, fetchCrossfitExerciseNav };
