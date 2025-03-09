'use client';

import { useContext } from 'react';
import { MobileContext } from '../Providers/Screen-provider';
import NewsCard from './NewsCard';
import NewsSwiper from './NewsSwiper';
import { mockUpNews } from '~/lib/mockupData';

const NewsDisplay = () => {
  const isMobile = useContext(MobileContext);

  return isMobile ? (
    <div className="mx-auto w-full">
      <NewsSwiper customArray={mockUpNews} />
    </div>
  ) : (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {mockUpNews.map((news, idx) => (
        <NewsCard url={news.url ?? '/'} key={idx} title={news.title} date={news.date} imageURL={news.imageURL} />
      ))}
    </div>
  );
};

export default NewsDisplay;
