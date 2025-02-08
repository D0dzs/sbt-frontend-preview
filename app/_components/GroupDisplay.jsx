'use client';

import { useContext } from 'react';
import { MobileContext } from './Providers/Screen-provider';
import GroupSwiper from './GroupSwiper';
import { groupData } from '~/lib/mockupData';
import { ChevronRight } from 'lucide-react';
import GroupCard from './GroupCard';
import Link from 'next/link';
import Container from './Container';

const GroupDisplay = () => {
  const isMobile = useContext(MobileContext);

  return (
    <>
      {isMobile ? (
        <Container className={'w-[70vw] justify-center gap-8 p-8'}>
          <h1 className="text-center text-xl lg:text-3xl">Csapatunk felépítése</h1>
          <GroupSwiper customArray={groupData} />
        </Container>
      ) : (
        <Container className={'w-[70vw] justify-center gap-8 p-8 xl:grid xl:w-[60vw]'}>
          <h1 className="text-center text-xl lg:text-3xl">Csapatunk felépítése</h1>
          <div className="grid w-fit grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {groupData.map((group, idx) => {
              return (
                <GroupCard
                  key={idx}
                  descriptionOfTheGroup={group.descriptionOfTheGroup}
                  imageSource={group.imageSource}
                  nameOfTheGroup={group.nameOfTheGroup}
                />
              );
            })}
          </div>
          <Link
            href={''}
            className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm xl:mt-0 xl:text-xl"
          >
            Tudj meg többet rólunk
            <ChevronRight size={16} className="block xl:hidden" />
            <ChevronRight className="hidden xl:block" />
          </Link>
        </Container>
      )}
    </>
  );
};

export default GroupDisplay;
