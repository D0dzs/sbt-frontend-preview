import dynamic from 'next/dynamic';
import SectionLayout from './components/(Layouts)/SectionLayout';
import Container from './components/Container';
import HeroLoader from './components/(Hero)/HeroLoader';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';
import FilmStripElement from './components/FilmStripElement';
import FilmStripContainer from './components/FilmStripContainer';
import { InfiniteSlider } from '~/components/ui/infinite-slider';

const HeroScreen = dynamic(() => import('./components/(Hero)/HeroPage'), {
  ssr: false,
  loading: () => (
    // valami megoldast kell erre kitalalni, nagyon gaz...
    <HeroLoader>
      <p className="font-comfortaa text-2xl font-bold">Loading...</p>
    </HeroLoader>
  ),
});

export default function Home() {
  return (
    <div className="relative mx-auto grid items-center overflow-x-hidden">
      <HeroScreen />
      <SectionLayout className={'flex w-screen items-center justify-center p-8 pt-16 xl:pt-32'}>
        <Container
          className={
            'grid h-fit w-[70vw] grid-flow-row grid-rows-1 overflow-clip p-0 xl:w-[60vw] xl:grid-flow-col xl:grid-cols-[.9fr_1.1fr] xl:grid-rows-1 xl:py-8'
          }
        >
          <div className="relative grid h-full w-full items-center justify-center py-8 xl:py-0">
            <img
              src={'/csapat.png'}
              alt="CSAPAT (front)"
              className="absolute top-1/2 left-1/2 z-1 max-w-72 min-w-32 -translate-x-1/2 -translate-y-1/2 self-center rounded-2xl lg:max-w-96 xl:h-fit xl:w-96"
            />
            <img
              src={'/csapat.png'}
              alt="CSAPAT (back)"
              className="mx-auto max-w-72 min-w-32 rounded-2xl blur-xl lg:max-w-96 xl:mt-0 xl:h-fit xl:w-96 xl:-translate-y-0"
            />
          </div>
          <div className="grid h-full grid-flow-row items-center justify-center gap-3 p-8 pt-0 lg:px-8 xl:p-0">
            <h3 className="self-end text-center text-xl font-bold xl:text-2xl">Rólunk</h3>
            <p className="self-baseline text-justify text-xs font-extralight md:mx-auto md:text-base lg:px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit culpa perferendis dignissimos,
              inventore veritatis fuga. Cum corrupti ducimus deserunt? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, dolor iste! Accusantium culpa exercitationem sequi voluptatibus repellat
              cupiditate perspiciatis ab. Minus debitis magni nemo, vel culpa necessitatibus quas itaque assumenda
              molestiae. Facilis omnis voluptatibus ab dolor veritatis impedit fuga dolores.
            </p>
            <Link
              href={''}
              className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm xl:mt-0 xl:text-xl"
            >
              Tudj meg többet rólunk
              <ChevronRight size={16} className="block xl:hidden" />
              <ChevronRight className="hidden xl:block" />
            </Link>
          </div>
        </Container>
      </SectionLayout>

      {/* Film strip (aka separator) */}
      <FilmStripContainer className={'-translate-x-8 mt-12 lg:mt-24 xl:mt-32'}>
        <InfiniteSlider gap={0} duration={50} durationOnHover={120}>
          <div className="flex w-fit shrink-0 xl:h-64">
            {Array.from({ length: 18 }, (_, i) => i).map((i) => (
              <FilmStripElement key={i} imageURL={i % 2 === 0 ? '/images/0.webp' : '/hero/background.png'} />
            ))}
          </div>
        </InfiniteSlider>
      </FilmStripContainer>

      <SectionLayout className={'h-screen'}></SectionLayout>
      {/* Footer */}
    </div>
  );
}
