import React, {
  useState, useEffect, ChangeEvent, useCallback,
} from 'react';

import { Exercise } from '@/src/types';
import SearchBar from '../../components/search-bar';
import ExerciseCard from '../../components/exercise-card';

import crossfitExercises from './exerciseExamples';

const ExerciseView = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const filteredExercises = exercises.filter((exercise) => exercise.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));

  const handleSearchInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  return (
    <div className="flex flex-col items-start gap-4">
      <SearchBar className="w-350" value={searchQuery} onChange={handleSearchInputChange} />
      <div className="flex flex-wrap justify-start gap-4">
        {filteredExercises.map((exercise) => (
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
    </div>
  );
};

export default ExerciseView;
