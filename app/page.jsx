import HeroScreen from './components/(Hero)/HeroPage';
import SectionLayout from './components/(Layouts)/SectionLayout';
import Container from './components/Container';
import { ModeToggle } from './components/Theme-Button';

export default function Home() {
  return (
    <div className="mx-auto grid items-center justify-center overflow-x-hidden relative">
      {/* Navbar */}
      <HeroScreen />
      <SectionLayout className={'h-[200vh] p-8'}>
        <span className="text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, minima?</span>
        <ModeToggle />
        <Container className={'w-[1120px] h-[500px]'}>Lorem ipsum dolor sit amet.</Container>
      </SectionLayout>
      {/* Footer */}
    </div>
  );
}
