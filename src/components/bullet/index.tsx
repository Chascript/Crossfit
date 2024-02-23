import React from 'react';

interface Props {
  heading: string;
  description: string;
}

export const Bullet = ({
  heading,
  description,
}: Props) => (
  <div className="flex flex-col">
    <h3 className="text-lg font-medium underline">{heading}</h3>
    <p className="text-base">{description}</p>
  </div>
);

export default Bullet;
