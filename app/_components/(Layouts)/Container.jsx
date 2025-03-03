'use client';

import { cn } from '~/lib/utils';

const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={`${cn(
        'bg-bme-lsecondary dark:bg-bme-dsecondary dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 mx-auto h-full w-[85vw] rounded-3xl p-24 shadow outline-2 lg:w-[60vw]',
        className,
      )}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
