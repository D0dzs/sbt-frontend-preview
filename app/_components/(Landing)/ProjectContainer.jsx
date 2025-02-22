'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useContext } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MobileContext } from '../Providers/Screen-provider';
import AIBoatProjectSlide from './AIBoatProjectSlide';
import MobileAIBPS from './MobileAIBPS';
import MobileSBPS from './MobileSBPS';
import SolarBoatProjectSlide from './SolarBoatProjectSlide';

import 'swiper/css';

const ProjectContainer = () => {
  const isMobile = useContext(MobileContext);

  return (
    <div className="relative h-screen lg:h-[125vh]">
      <div className="absolute top-0 left-0 h-full w-full bg-[url(/radial_background.svg)] bg-center bg-no-repeat opacity-50 lg:bg-fixed" />
      <svg width="1920" viewBox="0 0 1920 133" className="absolute w-screen -translate-y-px rotate-180">
        <path
          fillRule="inherit"
          clipRule="inherit"
          d="M2082 93.5L1961.9 84.5833C1843.6 75.6667 1603.4 57.8333 1365 66.75C1126.6 75.6667 886.402 111.333 648 111.333C409.598 111.333 169.402 75.6667 51.0974 57.8333L-69 40L-69 147L51.0974 147C169.402 147 409.598 147 648 147C886.402 147 1126.6 147 1365 147C1603.4 147 1843.6 147 1961.9 147L2082 147L2082 93.5Z"
          className="fill-bme-lprimary dark:fill-bme-dprimary"
          colorInterpolationFilters="sRGB"
        />
      </svg>

      <div className="grid h-screen w-screen grid-flow-col items-center justify-center lg:h-[125vh]">
        {isMobile ? (
          <div className="flex flex-col">
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{
                el: '#swiper-custom-pagination',
                renderBullet: function (_index, className) {
                  return `<span class="${className} h-3 w-3 rounded-full bg-bme-black dark:bg-bme-white transition-opacity duration-300 swiper-pagination-bullet-inactive"></span>`;
                },
              }}
              className="w-screen"
            >
              <SwiperSlide className="w-full">
                <MobileSBPS />
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <MobileAIBPS />
              </SwiperSlide>
              <div id="swiper-custom-pagination" className="mt-4 flex justify-center gap-2"></div>
            </Swiper>
          </div>
        ) : (
          <>
            <ChevronLeftIcon
              className="stroke-bme-blue dark:stroke-bme-orange swiper-button-prev-modified z-5 cursor-pointer"
              size={80}
            />
            <Swiper
              className="max-w-[1000px] min-w-80"
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={750}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-modified',
                prevEl: '.swiper-button-prev-modified',
              }}
            >
              <SwiperSlide className="w-full">
                <SolarBoatProjectSlide />
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <AIBoatProjectSlide />
              </SwiperSlide>
            </Swiper>
            <ChevronRightIcon
              className="stroke-bme-blue dark:stroke-bme-orange swiper-button-next-modified z-5 cursor-pointer"
              size={80}
            />
          </>
        )}
      </div>

      <div className="after:bg-bme-lprimary dark:after:bg-bme-dprimary absolute bottom-0 w-screen translate-y-px after:absolute after:bottom-0 after:h-px after:w-full">
        <svg width="1920" viewBox="0 0 1920 133" className="w-screen">
          <path
            fillRule="inherit"
            clipRule="inherit"
            d="M2082 93.5L1961.9 84.5833C1843.6 75.6667 1603.4 57.8333 1365 66.75C1126.6 75.6667 886.402 111.333 648 111.333C409.598 111.333 169.402 75.6667 51.0974 57.8333L-69 40L-69 147L51.0974 147C169.402 147 409.598 147 648 147C886.402 147 1126.6 147 1365 147C1603.4 147 1843.6 147 1961.9 147L2082 147L2082 93.5Z"
            className="fill-bme-lprimary dark:fill-bme-dprimary"
            colorInterpolationFilters="sRGB"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectContainer;
