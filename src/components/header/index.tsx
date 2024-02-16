'use client';

import React, { useState } from 'react';
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu,
} from '@nextui-org/react';
import { CrossfitInfoLogo } from '../crossfit-info-logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      classNames={{
        base: 'dark',
        wrapper: 'max-w-full',
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <CrossfitInfoLogo type="color" url="/" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-white"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Exercises
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex">
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full justify-center"
            href="/exercises"
            size="lg"
          >
            Exercises
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
