import React from 'react';

import {
  Card, CardHeader, CardBody, Image, Divider, Link, CardFooter, Chip,
} from '@nextui-org/react';
import NextImage from 'next/image';
import { DifficultyValue } from '@/src/types';
import DifficultyRating from '../difficulty-rating';

export interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  tags: string[];
  difficulty: DifficultyValue;
}

export const ExerciseCard = ({
  title,
  description,
  image,
  link,
  linkText,
  tags,
  difficulty,
}: Props) => (
  <Card className="max-w-[400px] bg-gray-100 shadow-lg rounded-lg">
    <CardHeader className="relative flex justify-between items-center">
      <p className="text-lg font-semibold text-gray-800">{title}</p>
      <DifficultyRating
        value={difficulty}
      />
    </CardHeader>
    <Divider />
    <CardBody>
      <Image
        isZoomed
        as={NextImage}
        src={image}
        alt={title}
        width={400}
        height={300}
        className="max-h-48"
      />
      <p className="mt-4 text-base text-gray-700">{description}</p>
    </CardBody>
    <Divider />
    <CardFooter className="flex justify-between items-center">
      <div className="flex flex-wrap max-h-7 gap-1">
        {tags.map((tag) => (
          <Chip key={tag} size="sm">{tag}</Chip>
        ))}
      </div>
      <div className="flex-grow" />
      <Link
        isExternal
        showAnchorIcon
        href={link}
        className=" text-sm text-blue-500 underline flex-shrink-0"
      >
        {linkText}
      </Link>
    </CardFooter>
  </Card>
);

export default ExerciseCard;
