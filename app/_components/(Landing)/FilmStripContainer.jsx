'use client';

import { cn } from '~/lib/utils';

const FilmStripContainer = ({ children, className, ...props }) => {
  return (
    <div
      className={`${cn('bg-bme-lsecondary dark:bg-bme-dfront dark:outline-bme-lsecondary/20 outline-bme-dsecondary/20 rotate-1 flex-nowrap overflow-clip py-2 outline-2', className)}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default FilmStripContainer;
