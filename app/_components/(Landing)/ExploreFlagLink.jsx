'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '~/lib/utils';

const ExploreFlagLink = ({ href = '/', imgSrc, imgAlt, text, outerClassName, innerClassName, ...props }) => {
  return (
    <Link href={href} className={`${cn('w-full max-w-[500px]', outerClassName)}`}>
      <div
        className={`${cn('relative w-full max-w-[500px] overflow-clip rounded-lg shadow transition-all lg:grayscale-100 lg:hover:grayscale-0', innerClassName)}`}
        {...props}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="object-cover"
          loading="lazy"
          width={500}
          height={500}
          quality={75}
        />
        <p className="bg-bme-blue dark:bg-bme-orange text-bme-white dark:text-bme-black absolute bottom-0 w-full px-2 text-xs lg:text-sm">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default ExploreFlagLink;
