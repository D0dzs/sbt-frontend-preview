import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className=" bg-linear-to-t from-bme-white/50 to-bme-white/30 w-[75vw] h-24 rounded-full px-8 backdrop-blur-sm drop-shadow-lg">
        <div className="text-bme-white text-3xl grid grid-flow-col items-center justify-between ">
          <div className="flex items-center gap-15">
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
          <Link href={''} className="bg-bme-orange text-bme-black text-center rounded-full px-4 py-2">
            Kapcsolat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
