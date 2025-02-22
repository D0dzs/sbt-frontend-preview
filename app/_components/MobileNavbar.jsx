'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './Providers/ModeSwitch';
import { AlignJustifyIcon } from 'lucide-react';

const MobileNavbar = ({ handleToggle }) => {
  return (
    <div
      id="mobile-navbar"
      className="text-bme-black dark:text-bme-white relative z-999 flex items-center justify-between gap-6 lg:hidden"
    >
      <Link href={'/'} scroll>
        <Image priority src={'/navbar/logo.svg'} width={64} height={64} alt="Logo" />
      </Link>
      <ModeToggle />
      <AlignJustifyIcon onClick={handleToggle} size={48} stroke="white" className="hidden cursor-pointer dark:block" />
      <AlignJustifyIcon onClick={handleToggle} size={48} stroke="black" className="block cursor-pointer dark:hidden" />
    </div>
  );
};

export default MobileNavbar;
