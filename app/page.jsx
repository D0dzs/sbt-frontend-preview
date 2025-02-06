import dynamic from 'next/dynamic';
import SectionLayout from './components/(Layouts)/SectionLayout';
import Container from './components/Container';
import HeroLoader from './components/(Hero)/HeroLoader';

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
          className={'grid h-fit w-[60vw] grid-flow-row grid-rows-1 p-0 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1'}
        >
          <div className="relative flex h-full items-center justify-center">
            <img src={'/csapat.png'} alt="CSAPAT" className="absolute z-1 h-3/4 rounded-2xl lg:h-3/4" />
            <img src={'/csapat.png'} alt="CSAPAT" className="h-3/4 rounded-2xl blur-md lg:h-3/4" />
          </div>
          <div className="grid h-full grid-flow-row items-center justify-center p-8 lg:pr-16 lg:pl-0">
            <h3 className="self-end text-center text-xl font-bold lg:text-2xl">Rólunk</h3>
            <p className="self-baseline text-justify text-xs font-extralight md:mx-auto md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit culpa perferendis dignissimos,
              inventore veritatis fuga. Cum corrupti ducimus deserunt? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat, dolor iste! Accusantium culpa exercitationem sequi voluptatibus repellat
              cupiditate perspiciatis ab. Minus debitis magni nemo, vel culpa necessitatibus quas itaque assumenda
              molestiae. Facilis omnis voluptatibus ab dolor veritatis impedit fuga dolores.
            </p>
          </div>
        </Container>
      </SectionLayout>
      {/* Footer */}
    </div>
  );
}
