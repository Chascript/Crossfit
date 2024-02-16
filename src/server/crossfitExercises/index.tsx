import crossfitExercises from './exerciseExamples';

export const fetchCrossfitExercises = async () => {
  // fetch exercises from the server
  const fetchedCrossfitExercises = await crossfitExercises;
  console.log('server');
  return fetchedCrossfitExercises;
};
