import React from 'react';

interface Props {
  heading: string;
  list: string[];
  underlined?: boolean;
}

export const BulletList = ({
  heading,
  list,
  underlined = true,
}: Props) => (
  <div className="flex flex-col">
    <h3 className={`text-lg font-medium ${underlined && 'underline'}`}>{heading}</h3>
    <ul className="list-disc ml-5">
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default BulletList;
