'use client';

import { useTheme } from 'next-themes';

const HeroScreen = () => {
  const { theme } = useTheme();
  const fillColor = theme === 'light' ? '#fafafa' : '#1a1a1a';

  return (
    <div className="relative grid h-[80vh] w-screen items-center justify-center bg-[url(/hero/background.webp)] bg-cover bg-center xl:h-screen xl:bg-cover xl:bg-fixed xl:bg-bottom">
      <svg
        width="1920"
        viewBox="0 0 1920 133"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-1 left-0 w-screen"
      >
        <filter id="waveShadow" filterUnits="userSpaceOnUse" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow
            dx="0"
            dy="-5"
            stdDeviation="5"
            floodColor={fillColor ?? 'red'}
            floodOpacity="1"
            colorInterpolationFilters="sRGB"
          />
        </filter>

        <path
          fillRule="inherit"
          clipRule="inherit"
          d="M2082 93.5L1961.9 84.5833C1843.6 75.6667 1603.4 57.8333 1365 66.75C1126.6 75.6667 886.402 111.333 648 111.333C409.598 111.333 169.402 75.6667 51.0974 57.8333L-69 40L-69 147L51.0974 147C169.402 147 409.598 147 648 147C886.402 147 1126.6 147 1365 147C1603.4 147 1843.6 147 1961.9 147L2082 147L2082 93.5Z"
          fill={fillColor ?? 'red'}
          className="z-1"
          style={{ filter: 'url(#waveShadow)' }}
        />
      </svg>
    </div>
  );
};

export default HeroScreen;
