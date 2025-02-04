import Image from 'next/image';
import React from 'react';

const HeroPage = () => {
  return (
    <div className='h-dvh w-dvw bg-[url("/hero/background.png")] bg-cover bg-fixed relative grid items-center justify-center'>
      <Image src={'/hero/wave.svg'} width={1920} height={1080} className="absolute bottom-0 left-0" alt='Hero Image' />
      <div className='bg-bme-black/50 p-8 rounded-2xl backdrop-blur-xs'>
        <h1 className="text-center text-5xl font-poppins font-semibold bg-gradient-to-r from-bme-purple to-bme-orange p-2 text-transparent bg-clip-text">
          Work in progress...
        </h1>
      </div>
    </div>
  );
};

export default HeroPage;
