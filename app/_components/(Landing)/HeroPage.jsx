'use client';

import { ChevronDown } from 'lucide-react';

const HeroScreen = () => {
  return (
    <div id="hero-wrapper" className="relative grid h-[85vh] w-screen items-center justify-center lg:h-screen">
      <div className="fixed top-0 left-0 h-fit w-fit">
        <video
          className="fixed h-full w-full object-cover"
          src="/hero/hero_video.mp4"
          loop
          autoPlay
          muted
          disablePictureInPicture
          playsInline
        />
      </div>

      <ChevronDown
        size={48}
        className="lg:bottom-18mx-auto absolute bottom-9 w-full animate-bounce lg:bottom-20"
        stroke="white"
      />

      <div className="px absolute -bottom-px left-0 flex w-screen self-end lg:-bottom-0">
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
