import React from 'react';
import { Spacer } from '@nextui-org/react';
import { CrossfitInfoLogo } from '../crossfit-info-logo';

export const Footer = () => (
  <footer className="bg-black pt-8 pb-2">
    <Spacer />
    <div className="flex flex-col items-center justify-center gap-3 text-center text-gray-400">
      <CrossfitInfoLogo type="light" />
      <p className="text-sm">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Crossfit Info. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
