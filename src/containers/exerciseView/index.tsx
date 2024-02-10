import React, {
  useState, useEffect, useCallback,
} from 'react';

import { Exercise } from '@/src/types';
import SearchBar from '../../components/search-bar';
import ExerciseCard from '../../components/exercise-card';

import crossfitExercises from './exerciseExamples';

const ExerciseView = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setExercises(crossfitExercises);
        setFilteredExercises(crossfitExercises);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };
    fetchExercises();
  }, []);

  const handleSearchInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const searchWords = query.split(/\s+/).filter(Boolean);

    setSearchQuery(query);

    if (query === '') {
      setFilteredExercises(exercises);
    } else {
      setFilteredExercises(exercises.filter((exercise) => searchWords.every((word) => exercise.tags.some((tag) => tag.toLowerCase().includes(word)))));
    }
  }, [exercises]);

  return (
    <div className="container flex flex-col items-start gap-4 p-4 mx-20">
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
