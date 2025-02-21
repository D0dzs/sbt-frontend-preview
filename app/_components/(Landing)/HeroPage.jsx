'use client';

import { ChevronDown } from 'lucide-react';

const HeroScreen = () => {
  return (
    <div className="relative -z-5 grid h-[85vh] w-screen items-center justify-center lg:h-screen">
      <div className="absolute top-0 left-0 h-full w-full">
        {/* TODO: Fix the attachment because we need to keep it at a fix position */}
        <video
          className="h-full w-full object-cover lg:fixed"
          src="/hero/hero_video.mp4"
          loop
          autoPlay
          muted
          disablePictureInPicture
          playsInline
        />
      </div>

      <ChevronDown size={48} className="lg:bottom-18mx-auto absolute bottom-9 w-full animate-bounce" stroke="white" />

      <div className="absolute -bottom-px left-0 flex w-screen self-end lg:-bottom-0">
        <svg id="a" width="2000" height="95" viewBox="0 0 2000 95" className="h-full w-screen lg:h-auto lg:w-auto">
          <path
            d="M0,95V48.5923c270.6392,38.3916,489.394,45.5522,633.7826,45.5743,331.3779.0506,493.6659-37.4654,872.5576-38.0624,214.403-.3378,387.6009,11.3203,493.6598,20.2999v43.5959H0Z"
            fillRule="evenodd"
            className="fill-bme-lprimary dark:fill-bme-dprimary"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroScreen;
