'use client';

import Link from 'next/link';
import { cn } from '~/lib/utils';

const SponsorCard = ({ sponsorImage, sponsorURL, sponsorName, className, imageClassName, ...props }) => {
  return (
    <div
      className={`${cn('from-bme-white/50 to-bme-white/30 outline-bme-dsecondary/5 max-w-[250px] flex-1 basis-full rounded-3xl bg-linear-to-t p-4 outline-2 sm:basis-[45%] lg:basis-[23%]', className)}`}
      {...props}
    >
      <Link href={sponsorURL} target="_blank" rel="noopener noreferrer">
        <div className="flex h-full items-center justify-center">
          <img className={`${cn('h-auto w-full object-fill', imageClassName)}`} src={sponsorImage} alt={sponsorName} />
        </div>
      </Link>
    </div>
  );
};

export default SponsorCard;
