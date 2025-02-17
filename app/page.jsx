import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import SectionLayout from './_components/(Layouts)/SectionLayout';
import Container from './_components/Container';
import FilmStripElement from './_components/FilmStripElement';
import FilmStripContainer from './_components/FilmStripContainer';
import { InfiniteSlider } from '~/components/ui/infinite-slider';
import GroupDisplay from './_components/GroupDisplay';
import Footer from './_components/Footer';
import HeroScreen from './_components/(Hero)/HeroPage';
import PageLayout from './_components/(Layouts)/PageLayout';

export default function Home() {
  return (
    <PageLayout className="relative mx-auto grid items-center overflow-x-hidden">
      <HeroScreen />
      <SectionLayout className={'p-8 pt-16 lg:pt-32'}>
        <Container
          className={'overflow-cliplg flex h-fit w-[70vw] flex-col gap-8 p-8 lg:w-[60vw] lg:py-8 2xl:flex-row'}
        >
          <div className="relative mt-0 h-full w-full px-1.5 py-8 lg:my-auto lg:py-0 lg:pt-0">
            <img
              src={'/images/this_is_us.webp'}
              alt="CSAPAT (front)"
              className="absolute top-1/2 left-1/2 z-1 w-60 -translate-x-1/2 -translate-y-1/2 self-center rounded-2xl lg:h-fit lg:w-96 lg:max-w-96"
            />
            <img
              src={'/images/this_is_us.webp'}
              alt="CSAPAT (back)"
              className="mx-auto w-60 rounded-2xl blur-xl lg:h-fit lg:w-96 lg:max-w-96"
            />
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-3 pt-0 lg:p-0 lg:px-8">
            <h3 className="text-xl font-bold lg:text-2xl">Rólunk</h3>
            <p className="text-justify text-xs font-extralight md:mx-auto md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit culpa perferendis dignissimos,
              inventore veritatis fuga. Cum corrupti ducimus deserunt? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, dolor iste! Accusantium culpa exercitationem sequi voluptatibus repellat
              cupiditate perspiciatis ab. Minus debitis magni nemo, vel culpa necessitatibus quas itaque assumenda
              molestiae. Facilis omnis voluptatibus ab dolor veritatis impedit fuga dolores.
            </p>
            <Link
              href={''}
              className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
            >
              Tudj meg többet rólunk
              <ChevronRight size={16} className="block lg:hidden" />
              <ChevronRight className="hidden lg:block" />
            </Link>
          </div>
        </Container>
      </SectionLayout>

      {/* Film strip (aka separator) */}
      <FilmStripContainer className={'my-12 w-screen lg:my-24'}>
        <InfiniteSlider gap={0} duration={60}>
          <div className="flex w-fit shrink-0 lg:h-64">
            {Array.from({ length: 12 }, (_, i) => i).map((i) => (
              <FilmStripElement key={i} imageURL={`/images/carousel/${i + 1}kep.webp`} />
            ))}
          </div>
        </InfiniteSlider>
      </FilmStripContainer>

      {/* Main Groups Container */}
      <SectionLayout>
        <GroupDisplay />
      </SectionLayout>

      {/* Placeholder for scrolling... */}
      <SectionLayout className={'h-screen'} />
    </PageLayout>
  );
}
