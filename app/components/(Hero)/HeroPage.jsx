import React from 'react';

const HeroScreen = () => {
  return (
    <div className='h-[75vh] lg:h-dvh w-dvw bg-[url("/hero/background.png")] bg-cover bg-center bg-fixed relative grid items-center justify-center'>
      <img src={'/hero/lwave.svg'} className="dark:hidden block w-screen absolute bottom-0 left-0" />
      <img src={'/hero/dwave.svg'} className="hidden dark:block line-clamp-none w-screen absolute bottom-0 left-0" />
      <div className="bg-black/50 rounded-2xl backdrop-blur-sm px-8">
        <div className="block text-center text-2xl lg:text-5xl font-bold bg-gradient-to-r from-bme-purple to-bme-orange text-transparent bg-clip-text">
          Work in progress...
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
