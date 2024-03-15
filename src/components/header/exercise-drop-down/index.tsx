import React from 'react';
import {
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection, Link,
} from '@nextui-org/react';
import { ExerciseNav } from '@/src/types';
import ChevronDown from '../../icons/chevron-down';

export interface Props {
  title: string;
  exerciseNav: ExerciseNav[];
}

export const ExerciseDropDowns = ({
  title,
  exerciseNav,
}: Props) => (
  <Dropdown>
    <DropdownTrigger>
      <Button
        disableRipple
        className="text-medium p-0 bg-transparent data-[hover=true]:bg-transparent"
        radius="sm"
        variant="light"
        endContent={<ChevronDown />}
      >
        {title}
      </Button>
    </DropdownTrigger>
    <DropdownMenu
      aria-label="All Exercises"
      items={exerciseNav}
      className="w-[340px]"
      itemClasses={{
        base: 'gap-4 ml-0',
      }}
    >
      {(item) => (
        <DropdownItem
          key={item.link}
        >
          {item.title}
        </DropdownItem>
      )}
    </DropdownMenu>
    <DropdownSection aria-label="View All Exercises" showDivider>
      <DropdownItem>
        <Link
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          href="/exercises"
        >
          View All Exercises
        </Link>
      </DropdownItem>
    </DropdownSection>
  </Dropdown>
);

export default ExerciseDropDowns;
