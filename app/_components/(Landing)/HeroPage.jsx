'use client';

import { ChevronDown, SunIcon } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { MobileContext } from '../Providers/Screen-provider';

const HeroScreen = () => {
  const isMobile = useContext(MobileContext);
  const [watt, setWatt] = useState(0);
  const [error, setError] = useState(false);

  const fetchWatt = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/forecast/latest`);
      const { value } = await response.json();
      setWatt(value);
    } catch (error) {
      setError(true);
    }
  };

  const handleScroll = () => {
    const heroWrapper = document.getElementById('page-container');
    if (heroWrapper) heroWrapper.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    fetchWatt();
  }, []);

  return (
    <div id="hero-wrapper" className="relative grid h-[80vh] w-screen items-center justify-center lg:h-[90vh]">
      <div className="fixed top-0 left-0 h-fit w-fit">
        {!isMobile ? (
          <video
            className="fixed h-full w-full object-cover"
            src="/hero/hero_video.mp4"
            loop
            autoPlay
            muted
            disablePictureInPicture
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="fixed h-full w-full object-cover" src="/images/carousel/12kep.webp" alt="Hero Image" />
        )}
      </div>

      {error ? (
        <div className="bg-bme-white/50 dark:bg-bme-black/35 absolute top-12 left-1/2 grid min-w-64 -translate-x-1/2 transform grid-flow-col place-items-center rounded-lg px-3 py-2 backdrop-blur-xs select-none lg:top-6 lg:right-12 lg:left-auto lg:translate-x-0 lg:gap-2">
          <SunIcon
            size={36}
            className="stroke-bme-orange animate-duration-[15s] animate-spin stroke-2 lg:h-12 lg:w-12"
          />
          <p className="text-sm drop-shadow-sm lg:text-base">
            Jelenlegi napsütésben
            <br /> <b className="text-yellow-300">N/A</b> Wattot termel a hajó
          </p>
        </div>
      ) : (
        <div className="bg-bme-white/50 dark:bg-bme-black/35 absolute top-12 left-1/2 grid min-w-64 -translate-x-1/2 transform grid-flow-col place-items-center rounded-lg px-3 py-2 backdrop-blur-xs select-none lg:top-6 lg:right-12 lg:left-auto lg:translate-x-0 lg:gap-2">
          <SunIcon
            size={36}
            className="stroke-bme-orange animate-duration-[15s] animate-spin stroke-2 lg:h-12 lg:w-12"
          />
          <p className="text-sm drop-shadow-sm lg:text-base">
            Jelenlegi napsütésben
            <br /> <b className="text-yellow-300">{watt}</b> Wattot termel a hajó
          </p>
        </div>
      )}

      <div className="absolute bottom-9 z-2 flex w-full justify-center lg:bottom-28" onClick={handleScroll}>
        <button className="hover:*:stroke-bme-blue dark:hover:*:stroke-bme-orange cursor-pointer transition-colors">
          <ChevronDown size={48} className="*:animate-bounce" stroke="white" />
        </button>
      </div>

      <div className="absolute -bottom-px left-0 flex w-screen self-end lg:-bottom-0">
        <svg id="a" width="2000" height="152" viewBox="0 0 2000 152" className="h-full w-screen lg:h-auto lg:w-auto">
          <path
            d="M 2082 93.5 L 1961.9 84.5833 C 1843.6 75.6667 1603.4 57.8333 1365 66.75 C 1126.6 75.6667 886.402 111.333 648 111.333 C 409.598 111.333 169.402 75.6667 51.0974 57.8333 L -69 40 L -69 155 L 191 155 C 169.402 155 409.598 155 648 155 C 886.402 155 1126.6 155 1365 155 C 1603.4 155 1843.6 155 1961.9 155 L 2082 155 L 2082 93.5 Z"
            fillRule="evenodd"
            className="fill-bme-lprimary dark:fill-bme-dprimary"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroScreen;
