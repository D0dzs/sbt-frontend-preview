import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '~/lib/utils';

const Navbar = ({ className, ...props }) => {
  return (
    <nav className={`${cn('z-99', className)}`} {...props}>
      <div className="bg-linear-to-t from-bme-white/50 to-bme-white/30 w-[75vw] h-24 rounded-full px-8 backdrop-blur-sm drop-shadow-lg">
        <div className="text-bme-white dark:text-bme-black text-2xl grid grid-flow-col items-center justify-between  h-full">
          <div className="flex items-center gap-8">
            <Link href={''}>
              <Image src={'/navbar/logo.svg'} width={96} height={96} alt="Logo" />
            </Link>
            <div className="flex gap-4">
              <Link href={''}>Rólunk</Link>
              <Link href={''}>Hírek</Link>
              <Link href={''}>Galéria</Link>
              <Link href={''}>Szponzorok</Link>
            </div>
          </div>
          <Link href={''} className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black text-center rounded-full px-4 py-2">
            Kapcsolat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
