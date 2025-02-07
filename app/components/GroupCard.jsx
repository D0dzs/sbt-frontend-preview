import React from 'react';
import { cn } from '~/lib/utils';

const GroupCard = ({ className, imageSource, nameOfTheGroup, descriptionOfTheGroup, ...props }) => {
  return (
    <div
      className={`${cn('bg-bme-lfront dark:bg-bme-dfront grid min-h-96 max-w-80 min-w-64 grid-rows-2 gap-4 overflow-clip rounded-2xl lg:min-h-[500px]', className)}`}
      {...props}
    >
      <div className="relative">
        <img src={imageSource} className="absolute top-0 left-0 z-3 h-full" />
        <img src={imageSource} className="z-5 h-full rounded-xl blur-2xl" />
      </div>
      <article className="z-15 p-4">
        <h3 className="mb-4 text-center text-xl">{nameOfTheGroup}</h3>
        <p className="line-clamp-4 w-full text-justify font-extralight lg:line-clamp-6">{descriptionOfTheGroup}</p>
      </article>
    </div>
  );
};

export default GroupCard;
