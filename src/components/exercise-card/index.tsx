import {
  Card, CardHeader, CardBody, CardFooter, Link, Image, Divider,
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
        as={NextImage}
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full"
      />
      <p className="mt-4 text-base text-gray-700">{description}</p>
    </CardBody>
    <Divider />
    <CardFooter className="flex justify-between items-center">
      <div>
        {tags.map((tag) => (
          <span key={tag} className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-700 rounded">{tag}</span>
        ))}
      </div>
      <Link
        isExternal
        showAnchorIcon
        href={link}
        className="text-blue-500 underline"
      >
        {linkText}
      </Link>
    </CardFooter>
  </Card>
);

export default ExerciseCard;
