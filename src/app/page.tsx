'use client';

import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import ExerciseView from '../containers/exerciseView';

export default function Page() {
  return (
    <NextUIProvider>
      <ExerciseView />
    </NextUIProvider>
  );
}
