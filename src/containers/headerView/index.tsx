import Header from '@/src/components/header';
import { fetchCrossfitExerciseNav } from '@/src/server/crossfitExercises';
import React from 'react';

export const HeaderView = async () => {
  const exerciseNav = await fetchCrossfitExerciseNav();

  return (
    <Header
      exerciseNav={exerciseNav}
    />
  );
};

export default HeaderView;
