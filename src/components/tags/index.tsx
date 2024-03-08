import React from 'react';
import { Chip } from '@nextui-org/react';

export interface Props {
  tags: string[];
  tagSize?: 'sm' | 'md' | 'lg';
}

export const ExerciseTags = ({
  tags,
  tagSize = 'sm',
}: Props) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <Chip key={tag} size={tagSize}>
        {tag}
      </Chip>
    ))}
  </div>
);

export default ExerciseTags;
