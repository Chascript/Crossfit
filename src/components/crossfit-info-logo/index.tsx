import React from 'react';

import { Image } from '@nextui-org/react';

import CrossfitInfoLogTransparent from '../../../public/logos/crossfit-info-logo-transparent.png';

export const CrossfitInfoLogo = () => (
  <Image
    src={CrossfitInfoLogTransparent.src}
    alt="Crossfit Info Logo"
    width={200}
    height={200}
  />
);
