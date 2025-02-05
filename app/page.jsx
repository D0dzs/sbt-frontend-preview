import HeroScreen from './components/(Hero)/HeroPage';
import SectionLayout from './components/(Layouts)/SectionLayout';
import Container from './components/Container';

export default function Home() {
  return (
    <div className="mx-auto grid items-center justify-center overflow-x-hidden relative">
      <HeroScreen />
      <SectionLayout className={'p-8 grid justify-center'}>
        <Container className={'h-[400px] grid grid-flow-row grid-rows-2 lg:grid-rows-1 lg:grid-flow-col lg:grid-cols-2 '}>
          <div className='flex items-center justify-center'>Kép</div>
          <div className='grid grid-flow-row'>
            <h3 className='text-center text-2xl font-bold'>Rólunk</h3>
            <p className='w-fit font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolore minus vitae officia nostrum, amet, neque error ex corporis consequatur molestias odit explicabo ea sint id recusandae fuga sapiente reiciendis?</p>
          </div>
        </Container>
      </SectionLayout>
      {/* Footer */}
    </div>
  );
}
