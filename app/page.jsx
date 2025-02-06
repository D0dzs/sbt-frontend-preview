import dynamic from 'next/dynamic';
import SectionLayout from './components/(Layouts)/SectionLayout';
import Container from './components/Container';
import HeroLoader from './components/(Hero)/HeroLoader';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const HeroScreen = dynamic(() => import('./components/(Hero)/HeroPage'), {
  ssr: false,
  loading: () => (
    //  valami megoldast kell erre kitalalni, nagyon gaz...
    <HeroLoader>
      <p className="font-comfortaa text-2xl font-bold">Loading...</p>
    </HeroLoader>
  ),
});

export default function Home() {
  return (
    <div className="relative mx-auto grid items-center justify-center overflow-x-hidden">
      <HeroScreen />
      <SectionLayout className={'grid justify-center p-8 pt-16 lg:pt-32'}>
        <Container
          className={
            'grid h-fit w-[70vw] grid-flow-row grid-rows-1 overflow-clip p-0 lg:w-[60vw] lg:grid-flow-col lg:grid-cols-[.9fr_1.1fr] lg:grid-rows-1 lg:py-8'
          }
        >
          <div className="relative grid h-full w-full items-center justify-center">
            <img
              src={'/csapat.png'}
              alt="CSAPAT"
              className="absolute top-1/2 left-1/2 z-1 h-3/4 -translate-x-1/2 -translate-y-1/2 self-center rounded-2xl lg:h-fit lg:w-96"
            />
            <img src={'/csapat.png'} alt="CSAPAT (background)" className="h-3/4 rounded-2xl blur-xl lg:h-fit lg:w-96" />
          </div>
          <div className="grid gap-3 h-full grid-flow-row items-center justify-center p-8 pt-0 lg:p-0 lg:pr-16 lg:pl-0">
            <h3 className="self-end text-center text-xl font-bold lg:text-2xl">Rólunk</h3>
            <p className="self-baseline text-justify text-xs font-extralight md:mx-auto md:text-base">
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
      {/* Footer */}
    </div>
  );
}
