'use client';

import { CommandIcon, LogOutIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './Providers/ModeSwitch';

const DesktopNavbar = ({ handleLogout, privileged, user }) => {
  return (
    <div
      id="desktop-navbar"
      className="text-bme-black dark:text-bme-white hidden h-full grid-flow-col items-center justify-between gap-4 text-2xl lg:grid"
    >
      <div className="flex items-center gap-6">
        <Link href={'/'} scroll>
          <Image priority src={'/navbar/logo.svg'} width={64} height={64} alt="Logo" />
        </Link>
        <div className="flex gap-4">
          <Link href={'/team'} scroll>
            Rólunk
          </Link>
          <Link href={''} scroll>
            Hírek
          </Link>
          <Link href={''} scroll>
            Galéria
          </Link>
          <Link href={'/sponsors'} scroll>
            Szponzorok
          </Link>
        </div>
      </div>
      <div className="grid w-full grid-flow-col items-center gap-6">
        {privileged ? (
          <Link href={'/dashboard'}>
            <CommandIcon size={32} strokeWidth={2} className="stroke-bme-black" />
          </Link>
        ) : null}
        {user ? (
          <button onClick={handleLogout} className="cursor-pointer">
            <LogOutIcon size={32} strokeWidth={2} className="stroke-bme-black" />
          </button>
        ) : null}
        <ModeToggle />
        <Link
          href={'/contact'}
          className="hover:bg-hovered-bme-blue dark:hover:bg-hovered-bme-orange dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black rounded-full px-4 py-1 text-center"
          scroll
        >
          Kapcsolat
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
