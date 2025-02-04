import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-bme-white/50 w-[75vw] h-24 rounded-full px-8 ">
      <div className="text-bme-white text-3xl grid grid-flow-col items-center justify-between ">
        <div className="flex items-center">
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
        <Link href={''} className="bg-bme-orange text text-center rounded-full px-4">
          Kapcsolat
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
