'use client';

const HeroScreen = () => {
  return (
    <div className="relative grid h-screen w-screen items-center justify-center bg-[url(/hero/background.png)] bg-center xl:h-screen xl:bg-cover xl:bg-fixed">
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="138.0685"
        viewBox="0 0 1920 138.0685"
        className="absolute -bottom-px left-0"
      >
        <g id="Layer_1-2">
          <path
            d="M0,41.5549c53.5946-7.454,140.9578-18.0891,248.9422-23.8129C712.2625-6.8166,930.0986,92.1736,1291.9801,94.0619c143.5856.7492,360.0602-13.5264,628.0199-94.0619v138.0685H0V41.5549Z"
            className="fill-bme-lprimary dark:fill-bme-dprimary"
          />
        </g>
      </svg>
    </div>
  );
};

export default HeroScreen;
