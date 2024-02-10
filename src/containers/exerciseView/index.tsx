import { useState, useEffect } from 'react'; // Import React hooks for state management and side effects
import { Exercise } from '@/src/types';
import ExerciseCard from '../../components/exercise-card'; // Import the ExerciseCard component
import crossfitExercises from './exerciseExamples'; // Import a function to fetch exercises from your data source

const ExerciseView = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setExercises(crossfitExercises);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };
    fetchExercises();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          title={exercise.title}
          description={exercise.description}
          image={exercise.image}
          link={exercise.link}
          linkText={exercise.linkText}
          tags={exercise.tags}
          difficulty={exercise.difficulty}
        />
      ))}
    </div>
  );
};

export default ExerciseView;
