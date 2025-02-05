import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '~/lib/utils';
import { ModeToggle } from './Theme-Button';

const Navbar = ({ className, ...props }) => {
  return (
    <nav className={`${cn('z-99', className)}`} {...props}>
      <div className="outline-2 outline-bme-dsecondary/10 dark:outline-bme-lsecondary/10 bg-linear-to-t from-bme-white/50 to-bme-white/30 w-[75vw] h-20 rounded-full px-8 backdrop-blur-sm shadow-md shadow-bme-dprimary/30">
        <div className="text-bme-black dark:text-bme-white text-2xl grid grid-flow-col items-center justify-between h-full">
          <div className="flex items-center gap-6">
            <Link href={'/'}>
              <Image src={'/navbar/logo.svg'} width={64} height={64} alt="Logo" />
            </Link>
            <div className="flex gap-4">
              <Link href={''}>Rólunk</Link>
              <Link href={''}>Hírek</Link>
              <Link href={''}>Galéria</Link>
              <Link href={''}>Szponzorok</Link>
            </div>
          </div>
          <div className="grid grid-flow-col items-center gap-4 w-full">
            <ModeToggle />
            <Link
              href={''}
              className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black text-center rounded-full px-4 py-1"
            >
              Kapcsolat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
