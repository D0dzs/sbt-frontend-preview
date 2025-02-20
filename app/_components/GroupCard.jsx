'use client';

import { cn } from '~/lib/utils';

const GroupCard = ({ className, imageSource, nameOfTheGroup, descriptionOfTheGroup, ...props }) => {
  return (
    <div
      className={`${cn('bg-bme-lfront dark:bg-bme-dfront flex max-h-full min-h-48 max-w-80 min-w-fit flex-col gap-4 overflow-clip rounded-2xl shadow-lg select-none', className)}`}
      {...props}
    >
      <div className="relative h-64">
        <img src={imageSource} className="absolute top-0 left-0 z-3 h-full w-full object-cover" />
        <img src={imageSource} className="h-full w-full object-cover blur-2xl" />
      </div>
      <article className="z-15 flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-center text-lg lg:text-xl">{nameOfTheGroup}</h3>
        <p className="mt-4 line-clamp-4 text-justify text-xs lg:line-clamp-6 lg:text-base">{descriptionOfTheGroup}</p>
      </article>
    </div>
  );
};

export default GroupCard;
