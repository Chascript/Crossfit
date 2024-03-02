import React from 'react';

export default function NotFound({ exercise }: { exercise: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 -
        {' '}
        {exercise}
        {' '}
        Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
