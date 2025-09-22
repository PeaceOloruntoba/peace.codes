'use client';

import type { TechDetails as TechDetailsType } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  const initials = label
    .split(/[\s\-_/]+/)
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase())
    .slice(0, 3)
    .join('');

  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        {logo ? (
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            className="transition-transform duration-300 md:hover:scale-110"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-200 text-gray-700 transition-transform duration-300 md:hover:scale-110">
            <span className="text-sm font-semibold">{initials}</span>
          </div>
        )}
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
