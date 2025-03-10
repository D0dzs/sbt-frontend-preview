'use client';

import { CalendarIcon, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const NewsCard = ({ url, imageURL, date, title }) => {
  return (
    <div className="w-full">
      <div className="bg-bme-lfront dark:bg-bme-dfront flex h-full min-h-96 flex-col overflow-hidden rounded-2xl shadow-lg">
        <div>
          <div className="h-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageURL} alt="Image Alt" className="h-full w-full object-cover" />
          </div>
          <p className="flex items-center gap-2 p-4 text-sm opacity-30">
            <CalendarIcon className="h-4 w-4 lg:h-6 lg:w-6" />
            {date}
          </p>
        </div>
        <article className="flex flex-1 flex-col justify-between px-4 pb-4">
          <h3 className="line-clamp-2 text-lg lg:text-xl">{title}</h3>
          <Link
            href={url}
            className="text-bme-blue hover:text-hovered-bme-blue hover:dark:text-hovered-bme-orange dark:text-bme-orange mx-auto flex w-fit items-center gap-1 text-center text-sm lg:text-base"
          >
            Hír megtekintése
            <ChevronRight size={16} className="block lg:hidden" />
            <ChevronRight className="hidden lg:block" />
          </Link>
        </article>
      </div>
    </div>
  );
};

export default NewsCard;
