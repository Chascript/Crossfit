import React from 'react';

import { Input } from '@nextui-org/react';

export interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchBar = ({
  value,
  onChange,
  className,
}: Props) => (
  <Input
    type="search"
    label="Search"
    labelPlacement="inside"
    placeholder="crossfit cardio"
    onChange={onChange}
    value={value}
    className={className}
  />
);

export default SearchBar;
