import { Link } from 'next-view-transitions';
import React from 'react';

import { BlurImage } from './blur-image';
import { strapiImage } from '@/lib/strapi/strapiImage';
import { Image } from '@/types/types';

export const Logo = ({
  image,
  company,
  locale,
}: {
  image?: Image;
  company?: string | null;
  locale?: string;
}) => {
  if (image) {
    return (
      <Link
        href={`/${locale || 'hu'}`}
        className="font-normal flex space-x-2 items-center text-sm mr-4  text-black   relative z-20"
      >
        <BlurImage
          src={strapiImage(image?.url)}
          alt={image.alternativeText}
          width={300}
          height={300}
          className="h-20 w-20 rounded-xl mr-2"
        />

        <span className="text-white font-bold">{company}</span>
      </Link>
    );
  }

  return;
};
