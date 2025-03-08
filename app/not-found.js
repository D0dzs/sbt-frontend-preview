import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Not Found',
  description: 'Sajnos a keresett oldal nem található!',
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-4">
      {/* eslint-disable-next-line */}
      <img className="absolute -z-1 h-full w-full opacity-50" src="/not-found-gif.webp" alt="404" />
      <div className="flex w-full flex-col items-center">
        <h1 className="text-4xl font-bold">Ez az oldal elhajózott... ⛵</h1>
        <p>Sajnos a keresett oldal nem található.</p>
      </div>
      <Link
        href={'/'}
        className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
      >
        <ChevronLeft size={16} className="block lg:hidden" />
        <ChevronLeft className="hidden lg:block" />
        Vissza a kezdőlapra
      </Link>
    </div>
  );
}
