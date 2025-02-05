import HeroScreen from './components/(Hero)/HeroPage';
import SectionLayout from './components/(Layouts)/SectionLayout';
import Container from './components/Container';
import { ModeToggle } from './components/Theme-Button';

export default function Home() {
  return (
    <div className="mx-auto grid items-center justify-center overflow-x-hidden relative">
      <HeroScreen />
      <SectionLayout className={'h-[200vh] p-8'}>
        <ModeToggle />
        <Container className={'w-[900px] h-[400px] grid'}>
          <div> left </div>
          <div> right </div>
        </Container>
      </SectionLayout>
      {/* Footer */}
    </div>
  );
}
