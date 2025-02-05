import React from 'react';
import { cn } from '~/lib/utils';

const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={`${cn(
        'bg-bme-lsecondary dark:bg-bme-dfront dark:outline-bme-lsecondary/20 outline-bme-dsecondary/20 rounded-3xl p-24 outline-2',
        className,
      )}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
