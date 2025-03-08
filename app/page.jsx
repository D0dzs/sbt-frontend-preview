import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';
import { InfiniteSlider } from '~/components/ui/infinite-slider';
import { Separator } from '~/components/ui/separator';
import ExploreFlagLink from './_components/(Landing)/ExploreFlagLink';
import FilmStripContainer from './_components/(Landing)/FilmStripContainer';
import FilmStripElement from './_components/(Landing)/FilmStripElement';
import GroupDisplay from './_components/(Landing)/GroupDisplay';
import HeroScreen from './_components/(Landing)/HeroPage';
import NewsDisplay from './_components/(Landing)/NewsDisplay';
import ProjectContainer from './_components/(Landing)/ProjectContainer';
import Container from './_components/(Layouts)/Container';
import PageLayout from './_components/(Layouts)/PageLayout';

export default function Home() {
  return (
    <PageLayout className="mx-auto overflow-x-hidden">
      <HeroScreen />

      <div
        id="page-container"
        className="dark:bg-bme-dprimary bg-bme-lprimary relative grid grid-flow-row gap-12 lg:gap-32"
      >
        <Container
          className={'mt-12 flex h-fit w-[85vw] flex-col gap-8 overflow-clip p-8 px-4 lg:w-[60vw] 2xl:flex-row'}
        >
          <div className="relative mt-0 h-full w-full px-1.5 lg:my-auto lg:py-8 lg:pt-8">
            <Image
              src="/images/this_is_us.webp"
              alt="CSAPAT (front)"
              className="absolute top-1/2 left-1/2 z-1 aspect-16/11 -translate-x-1/2 -translate-y-1/2 self-center rounded-2xl lg:w-96 lg:max-w-96"
              width={384}
              height={264}
              priority={false}
              loading="lazy"
            />
            <Image
              src="/images/this_is_us.webp"
              alt="CSAPAT (back)"
              className="mx-auto aspect-16/11 rounded-2xl blur-lg lg:h-fit lg:w-96 lg:max-w-96"
              width={384}
              height={264}
              priority={false}
              loading="lazy"
            />
          </div>
          <div className="my-auto flex h-full flex-col items-center justify-center gap-3 pt-0 lg:p-0 lg:px-8">
            <h3 className="text-center text-xl lg:text-3xl">Rólunk</h3>
            <p className="text-justify text-xs font-extralight md:mx-auto md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit culpa perferendis dignissimos,
              inventore veritatis fuga. Cum corrupti ducimus deserunt? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, dolor iste! Accusantium culpa exercitationem sequi voluptatibus repellat
              cupiditate perspiciatis ab. Minus debitis magni nemo, vel culpa necessitatibus quas itaque assumenda
              molestiae. Facilis omnis voluptatibus ab dolor veritatis impedit fuga dolores.
            </p>
            <Link
              href={''}
              className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
            >
              Tudj meg többet rólunk
              <ChevronRight size={16} className="block lg:hidden" />
              <ChevronRight className="hidden lg:block" />
            </Link>
          </div>
        </Container>

        <FilmStripContainer className={'w-screen'}>
          <InfiniteSlider gap={0} duration={60}>
            <div className="flex w-fit shrink-0">
              {Array.from({ length: 12 }, (_, i) => i).map((i) => (
                <FilmStripElement key={i} imageURL={`/images/carousel/${i + 1}kep.webp`} />
              ))}
            </div>
          </InfiniteSlider>
        </FilmStripContainer>

        <GroupDisplay />
        <ProjectContainer />

        <Container className={'lg:p8 mb-12 h-fit w-[85vw] gap-4 px-4 py-8 lg:w-[60vw] lg:p-8'}>
          <h1 className="mb-4 text-center text-xl lg:text-3xl">Fedezd fel</h1>
          <div className="mx-auto flex w-full flex-wrap justify-center gap-4 lg:gap-6">
            <ExploreFlagLink text={'További versenyeink >'} imgAlt={'Versenyeink'} imgSrc={'/more/button1.webp'} />
            <ExploreFlagLink href='/team' text={'További tagjaink >'} imgAlt={'Tagjaink'} imgSrc={'/more/button2.webp'} />
            <ExploreFlagLink
              text={'További megorokitett képeink >'}
              imgAlt={'Versenyeink'}
              imgSrc={'/more/button3.webp'}
            />
            <ExploreFlagLink
              href="/sponsors"
              text={'További szponzorok >'}
              imgAlt={'Szponzorok'}
              imgSrc={'/more/button4.webp'}
            />
            <ExploreFlagLink text={'További eredményekeink >'} imgAlt={'Eredményeink'} imgSrc={'/more/button5.webp'} />
          </div>

          <div className="mx-auto my-8 max-w-[800px]">
            <Separator className="bg-bme-black/50 dark:bg-bme-white/50" />
          </div>

          <div className="flex flex-col lg:gap-8">
            <h1 className="text-center text-xl lg:text-left lg:text-3xl">Legfrissebb hírek</h1>
            <NewsDisplay />
            <Link
              href={'/news'}
              className="hover:bg-hovered-bme-blue dark:bg-bme-orange hover:dark:bg-hovered-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-4 py-1 text-center text-sm lg:mt-0 lg:text-xl"
            >
              Tovább az összes hírhez
              <ChevronRight size={16} className="block lg:hidden" />
              <ChevronRight className="hidden lg:block" />
            </Link>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}
