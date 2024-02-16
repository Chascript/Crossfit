import React from 'react';

import { Image, Link } from '@nextui-org/react';

import CrossfitInfoLogColor from '../../../public/logos/crossfit-info-logo-transparent.png';
import CrossfitInfoLogDark from '../../../public/logos/crossfit-info-logo-black-transparent.png';
import CrossfitInfoLogLight from '../../../public/logos/crossfit-info-logo-white-transparent.png';

interface Props {
  type?: 'color' | 'light' | 'dark';
  url?: string;
}

export const CrossfitInfoLogo = ({
  type = 'color',
  url,
}: Props) => {
  const imageSourceMap = {
    color: CrossfitInfoLogColor,
    light: CrossfitInfoLogLight,
    dark: CrossfitInfoLogDark,
  };
  const imageSource = imageSourceMap[type];

  return (
    url ? (
      <Link
        href={url}
      >
        <Image
          src={imageSource.src}
          alt="Crossfit Info Logo"
          width={200}
          height={200}
        />
      </Link>
    ) : (
      <Image
        src={imageSource.src}
        alt="Crossfit Info Logo"
        width={200}
        height={200}
      />
    )
  );
};
