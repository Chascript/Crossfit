'use client';

import React, { useState } from 'react';
import {
  Divider,
  Link,
  Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
} from '@nextui-org/react';
import { ExerciseNav } from '@/src/types';
import { CrossfitInfoLogo } from '../crossfit-info-logo';
import { ExerciseDropDowns } from './exercise-drop-down';

export interface Props {
  exerciseNav: ExerciseNav[];
}

export const Header = ({
  exerciseNav,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      classNames={{
        base: 'dark bg-black',
        wrapper: 'max-w-full',
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      isBlurred
    >
      <NavbarBrand>
        <CrossfitInfoLogo type="light" url="/" />
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-white"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ExerciseDropDowns
          title="All Exercises"
          exerciseNav={exerciseNav}
        />
        <Divider orientation="vertical" />
        <NavbarItem className="mb-0">
          <Link
            className="p-0 bg-transparent data-[hover=true]:bg-transparent min-h-10"
            color="foreground"
            href="/exercises"
          >
            Exercise List
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex ml-0">
        <NavbarMenuItem className="list-none">
          <Link
            color="foreground"
            href="/exercises"
            size="lg"
          >
            View All Exercises
          </Link>
        </NavbarMenuItem>
        <Divider />
        {exerciseNav.map((item) => (
          <NavbarMenuItem key={item.link} className="list-none">
            <Link
              color="foreground"
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
