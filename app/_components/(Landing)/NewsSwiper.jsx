'use client';

import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '~/lib/utils';
import NewsCard from './NewsCard';

import 'swiper/css';

const NewsSwiper = ({ customArray, className, children, ...props }) => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: '.news-custom-pagination',
          renderBullet: (_index, className) => {
            return `<span class="${className} h-3 w-3 rounded-full bg-bme-black dark:bg-bme-white transition-opacity duration-300 swiper-pagination-bullet-inactive"></span>`;
          },
        }}
        className={`${cn('my-4 max-w-80 min-w-full grid-rows-2 gap-4 overflow-clip rounded-2xl bg-transparent', className)}`}
        {...props}
      >
        {customArray.map((el, idx) => {
          return (
            <SwiperSlide key={idx}>
              <NewsCard title={el.title} date={el.date} imageURL={el.imageURL} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* This wil contain the swiper pagination bullets, DO NOT EDIT THIS */}
      <div className="news-custom-pagination mt-4 flex justify-center gap-2"></div>
    </>
  );
};

export default NewsSwiper;
