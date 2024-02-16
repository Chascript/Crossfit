'use client';

import React, {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';

import { Exercise } from '@/src/types';
import { Input, Select, SelectItem } from '@nextui-org/react';
import SearchIcon from '@/src/components/icons/search-icon';
import ExerciseCard from '../../components/exercise-card';

export interface Props {
  crossfitExercises: Exercise[];
}

const ExerciseView = ({
  crossfitExercises,
}: Props) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [filteredByQueryExercises, setFilteredByQueryExercises] = useState<Exercise[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<number[]>([]);
  const [uniqueDifficulties, setUniqueDifficulties] = useState<number[]>([]);

  const updateUniqueDifficulties = (allExercises: Exercise[]) => {
    const uniqueDifficulty: number[] = [];
    allExercises.forEach((exercise: Exercise) => {
      if (!uniqueDifficulty.includes(exercise.difficulty)) {
        uniqueDifficulty.push(exercise.difficulty);
      }
    });
    uniqueDifficulty.sort((a: number, b: number) => a - b);
    setUniqueDifficulties(uniqueDifficulty);
  };

  useEffect(() => {
    updateUniqueDifficulties(filteredByQueryExercises);
  }, [filteredByQueryExercises, searchQuery]);

  useEffect(() => {
    setExercises(crossfitExercises);
    updateUniqueDifficulties(crossfitExercises);
  }, [crossfitExercises]);

  useEffect(() => {
    const filterExercises = () => {
      let filtered = exercises;

      const searchWords = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
      filtered = filtered.filter((exercise) => searchWords.every((word) => exercise.tags.some((tag) => tag.toLowerCase().includes(word))));

      setFilteredByQueryExercises(filtered);
    };

    filterExercises();
  }, [exercises, searchQuery]);

  useEffect(() => {
    const filterExercises = () => {
      let filtered = filteredByQueryExercises;

      if (selectedDifficulty.length > 0) {
        filtered = filtered.filter((exercise) => selectedDifficulty.some((difficulty) => exercise.difficulty === difficulty));
      }

      setFilteredExercises(filtered);
    };

    filterExercises();
  }, [filteredByQueryExercises, selectedDifficulty]);

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    [],
  );

  const handleDifficultyChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const difficulty = event.target.value.split(',');
    const parsedDifficulties = difficulty.map((value) => {
      const parsedValue = parseInt(value, 10);
      return Number.isNaN(parsedValue) || value === '' ? [] : parsedValue;
    });
    const flatDifficulties = parsedDifficulties.flat();

    setSelectedDifficulty(flatDifficulties);
    console.log(difficulty);
    console.log(parsedDifficulties);
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery((prevQuery) => {
      if (prevQuery?.toLowerCase().includes(tag.toLowerCase())) {
        const newQuery = prevQuery.replace(new RegExp(`\\b${tag}\\b`, 'gi'), '');
        return newQuery.trim();
      }
      return prevQuery ? `${prevQuery} ${tag}` : tag;
    });
  };

  return (
    <div className="container flex flex-col gap-4 p-4 mx-20">
      <Input
        type="search"
        label="Search"
        labelPlacement="inside"
        placeholder="crossfit, cardio"
        radius="full"
        onChange={handleSearchInputChange}
        value={searchQuery}
        className="max-w-xs"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <Select
        label="Difficulty"
        radius="full"
        placeholder="Select a Difficulty"
        selectionMode="multiple"
        items={uniqueDifficulties.map((difficulty) => ({ value: difficulty, label: difficulty.toString() }))}
        onChange={handleDifficultyChange}
        className="max-w-xs"
      >
        {(difficulty) => <SelectItem key={difficulty.value} value={difficulty.value}>{difficulty.label}</SelectItem>}
      </Select>
      <div className="flex flex-wrap justify-start gap-4">
        {filteredExercises.length === 0
          ? (
            crossfitExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                image={exercise.image}
                link={exercise.link}
                linkText={exercise.linkText}
                tags={exercise.tags}
                difficulty={exercise.difficulty}
                onClickTag={handleTagClick}
                searchQuery={searchQuery}
              />
            ))
          ) : (
            filteredExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                image={exercise.image}
                link={exercise.link}
                linkText={exercise.linkText}
                tags={exercise.tags}
                difficulty={exercise.difficulty}
                onClickTag={handleTagClick}
                searchQuery={searchQuery}
              />
            ))
          )}
      </div>
    </div>
  );
};

export default ExerciseView;
