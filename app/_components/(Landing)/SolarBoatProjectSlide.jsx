'use client';

import { GaugeIcon, HazeIcon, MapIcon } from 'lucide-react';
import { Separator } from '~/components/ui/separator';

const SolarBoatProjectSlide = () => {
  return (
    <div className="relative grid h-fit w-full gap-8 p-4">
      <div className="z-5 m-4 flex h-full flex-col items-center">
        <div className="bg-bme-blue dark:bg-bme-orange dark:shadow-bme-orange shadow-bme-blue mx-auto flex h-10 w-fit items-center rounded-t-lg px-12 py-8 shadow-[0px_0px_6px_2px]">
          <h1 className="text-bme-white dark:text-bme-black text-4xl">SolarBoat Projekt</h1>
        </div>
        <img src="/projekt_solar_21_9.webp" alt="Image" className="aspect-21/9 max-h-56 rounded-4xl shadow-xl" />
      </div>
      <div className="z-5 flex h-fit gap-8 px-8">
        <div className="w-full self-center">
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            width="170.3316833333"
            height="61.4166666667"
            viewBox="0 0 1021.9901 368.5"
          >
            <path
              d="M223.5,320.5c0,17.5-12,37-40,48-7.5-12-29.5-16-52-16-40.5,0-58.5,13-86,13-32.5,0-45.5-23.5-45.5-47s15-59,20.5-73.5c19-48.5,72.5-157,77-186.5.5-5,1-9.5,1-13,0-14-4.5-21.5-9-26C100,11,116.5,0,139.5,0c24.5,0,39,13.5,39,40.5s-36,98-51,131c-17,37.5-45,105-45,128,0,2,0,3,.5,4.5,18.5-11,64-20.5,87-20.5,35,0,53.5,17,53.5,37Z"
              className="dark:fill-bme-white"
            />
            <path
              d="M445.99,315.5c0,13,4,27.5,11,33.5-10.5,9.5-24.5,16.5-43,16.5-20.5,0-32-7-41-29.5-10.5,12.5-41.5,29.5-72.5,29-40.5-.5-62-31-62-75.5,0-69.5,66.5-186,147.5-186,31.5,0,44,15,47.5,22.5,2.5-2,6-10,2.5-17,6-3,20-6.5,34.5-6.5,18,0,34,9.5,34,31,0,13.5-15.5,45.5-21.5,58.5-16,35.5-37,79-37,123.5h0ZM413.49,170.99c0-12-4.5-21.5-17.5-21.5-38.5,0-86,92.5-86,132,0,17,7,27,21.5,27,23.5,0,47.5-34.5,67.5-82.5,3.5-8.5,14.5-35.5,14.5-55Z"
              className="dark:fill-bme-white"
            />
            <path
              d="M673.49,365.5c-30.5,0-42.5-19.5-42.5-48.5,0-55.5,51-118.5,51-145,0-10.5-5-17.5-15-17.5-23.5,0-58,36.5-74.5,72-11.5,24.5-21.5,56.5-21.5,90,0,17,6,29,11,32.5-5.5,6-23,16.5-40.5,16.5-24.5,0-43-10.5-43-45.5,0-31,13.5-71,28.5-107,6.5-15.5,27-55,27-78,0-8.5-1.5-15-5-18,9-7.5,24.5-14.5,43.5-14.5s36.5,11.5,36,29.5c7-9,35.5-28.5,66-28.5s57,12,57,48.5c0,20.5-18,59-27.5,83-11,27.5-20,52.5-20,76.5,0,14,3.5,27,13,36.5-8,9.5-24.5,17.5-43.5,17.5Z"
              className="dark:fill-bme-white"
            />
            <path
              d="M963.49,315.5c0,13,4,27.5,11,33.5-10.5,9.5-24.5,16.5-43,16.5-20.5,0-32-7-41-29.5-10.5,12.5-41.5,29.5-72.5,29-40.5-.5-62-31-62-75.5,0-69.5,66.5-186,147.5-186,31.5,0,44,15,47.5,22.5,2.5-2,6-10,2.5-17,6-3,20-6.5,34.5-6.5,18.0001,0,34.0001,9.5,34.0001,31,0,13.5-15.5,45.5-21.5,58.5-16,35.5-37,79-37,123.5h0ZM930.99,170.99c0-12-4.5-21.5-17.5-21.5-38.5,0-86,92.5-86,132,0,17,7,27,21.5,27,23.5,0,47.5-34.5,67.5-82.5,3.5-8.5,14.5-35.5,14.5-55Z"
              className="dark:fill-bme-white"
            />
          </svg>
          <br />
          <p className="w-full text-center text-base opacity-75">2. gen hajó</p>
        </div>
        <div className="flex gap-8">
          <Separator orientation="vertical" className="bg-bme-black/50 dark:bg-bme-white/50 w-[2px]" />
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum suscipit quam, id bibendum felis
            posuere eu. Nulla vitae interdum ipsum. Cras malesuada posuere massa, non ultrices turpis facilisis vitae.
            Maecenas interdum sem a ante tempor finibus. Nullam ultricies luctus consectetur. Maecenas scelerisque
            pulvinar suscipit. Nunc sit amet lectus dui. Integer dignissim et massa nec laoreet. Nulla mollis nec risus
            tincidunt rhoncus. In nec placerat neque. Sed facilisis mattis turpis a fermentum. Sed efficitur ullamcorper
            sodales.
          </p>
        </div>
      </div>
      <div className="z-5 flex flex-col gap-8">
        <Separator className="bg-bme-black/50 dark:bg-bme-white/50 h-[2px]" />
        <div className="flex items-center justify-around">
          <div className="w-fit text-center text-2xl">
            <GaugeIcon size={48} className="stroke-bme-blue dark:stroke-bme-orange mx-auto" />
            <p>25 km/h</p>
            <p className="opacity-50">top speed</p>
          </div>
          <div className="w-fit text-center text-2xl">
            <HazeIcon size={48} className="stroke-bme-blue dark:stroke-bme-orange mx-auto" />
            <p>1000+ kW</p>
            <p className="opacity-50">napelem energia</p>
          </div>
          <div className="w-fit text-center text-2xl">
            <MapIcon size={48} className="stroke-bme-blue dark:stroke-bme-orange mx-auto" />
            <p>40+ km</p>
            <p className="opacity-50">max távolság</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarBoatProjectSlide;
