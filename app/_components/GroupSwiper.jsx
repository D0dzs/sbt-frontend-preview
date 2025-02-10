'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import 'swiper/css';
import { cn } from '~/lib/utils';
import GroupCard from './GroupCard';

const GroupSwiper = ({ customArray, className, children, ...props }) => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: '.swiper-custom-pagination',
          renderBullet: (_index, className) => {
            return `<span class="${className} h-3 w-3 rounded-full bg-bme-black dark:bg-bme-white transition-opacity duration-300 swiper-pagination-bullet-inactive"></span>`;
          },
        }}
        className={`${cn('my-4 max-w-80 min-w-56 grid-rows-2 gap-4 overflow-clip rounded-2xl bg-transparent', className)}`}
        {...props}
      >
        {customArray.map((el, idx) => {
          return (
            <SwiperSlide key={idx} className="">
              <GroupCard
                key={idx}
                descriptionOfTheGroup={el.descriptionOfTheGroup}
                imageSource={el.imageSource}
                nameOfTheGroup={el.nameOfTheGroup}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* This wil contain the swiper pagination bullets, DO NOT EDIT THIS */}
      <div className="swiper-custom-pagination mt-4 flex justify-center gap-2"></div>

      <Link
        href={''}
        className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
      >
        Tudj meg többet rólunk
        <ChevronRight size={16} className="block lg:hidden" />
        <ChevronRight className="hidden lg:block" />
      </Link>
    </>
  );
};

export default GroupSwiper;
