'use client';

import { useTheme } from 'next-themes';
import React from 'react';

const HeroScreen = () => {
  const { theme } = useTheme();

  return (
    <div className='h-[75vh] lg:h-dvh w-dvw bg-[url("/hero/background.png")] bg-cover bg-center bg-fixed relative grid items-center justify-center'>
      {theme === 'light' ? (
        <img src={'/hero/lwave.svg'} className="w-screen absolute bottom-0 left-0" />
      ) : (
        <img src={'/hero/dwave.svg'} className="w-screen absolute bottom-0 left-0" />
      )}
    </div>
  );
};

export default HeroScreen;
