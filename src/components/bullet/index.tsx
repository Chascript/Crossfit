import React from 'react';

interface Props {
  heading: string;
  description: string;
  underlined?: boolean;
}

export const Bullet = ({
  heading,
  description,
  underlined = true,
}: Props) => (
  <div className="flex flex-col">
    <h3 className={`text-lg font-medium ${underlined && 'underline'}`}>{heading}</h3>
    <p className="text-base">{description}</p>
  </div>
);

export default Bullet;
