import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '~/lib/utils';
import { ModeToggle } from './ModeSwitch';

const Navbar = ({ className, ...props }) => {
  return (
    <nav className={`${cn('z-10', className)}`} {...props}>
      <div className="outline-bme-dsecondary/10 dark:outline-bme-lsecondary/10 from-bme-white/50 to-bme-white/30 shadow-bme-dprimary/30 h-20 w-[75vw] rounded-full bg-linear-to-t px-8 shadow-md outline-2 backdrop-blur-sm">
        <div className="text-bme-black dark:text-bme-white grid h-full grid-flow-col items-center justify-between text-2xl">
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
          <div className="grid w-full grid-flow-col items-center gap-4">
            <ModeToggle />
            <Link
              href={''}
              className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black rounded-full px-4 py-1 text-center"
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
