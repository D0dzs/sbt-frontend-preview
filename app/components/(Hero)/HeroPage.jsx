'use client';

import { useTheme } from 'next-themes';
import React from 'react';

const HeroScreen = () => {
  const { theme } = useTheme();

  return (
    <div className='relative grid h-[75vh] w-dvw items-center justify-center bg-[url("/hero/background.png")] bg-cover bg-fixed bg-center lg:h-dvh'>
      {theme === 'light' ? (
        <img src={'/hero/lwave.svg'} className="absolute bottom-0 left-0 w-screen" />
      ) : (
        <img src={'/hero/dwave.svg'} className="absolute bottom-0 left-0 w-screen" />
      )}
    </div>
  );
};

export default HeroScreen;
