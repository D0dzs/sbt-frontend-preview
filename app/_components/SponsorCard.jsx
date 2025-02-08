'use client';

import Link from 'next/link';
import { cn } from '~/lib/utils';

const SponsorCard = ({ sponsorImage, sponsorURL, sponsorName, className, imageClassName, ...props }) => {
  return (
    <div
      className={`${cn('from-bme-white/50 to-bme-white/30 outline-bme-dsecondary/5 h-fit min-w-full rounded-3xl bg-linear-to-t p-4 outline-2', className)}`}
      {...props}
    >
      <Link href={sponsorURL} target="_blank" rel="noopener noreferrer">
        <img className={`${cn('mx-auto h-18', imageClassName)}`} src={sponsorImage} alt={sponsorName} />
      </Link>
    </div>
  );
};

export default SponsorCard;
