'use client';

import { cn } from '~/lib/utils';

const HeroLoader = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'from-bme-lprimary to-bme-lsecondary dark:bg-bme-dprimary text-bme-black dark:text-bme-white dark:from-bme-dprimary dark:to-bme-dsecondary z-99999 grid h-screen w-screen items-center justify-center bg-radial',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default HeroLoader;
