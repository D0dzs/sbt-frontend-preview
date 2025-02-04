import HeroScreen from './components/(Hero)/HeroPage';
import SectionLayout from './components/(Layouts)/SectionLayout';

export default function Home() {
  return (
    <div className="mx-auto grid bg-bme-black items-center justify-center overflow-x-hidden relative">
      {/* Navbar */}
      <HeroScreen />
      <SectionLayout>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, minima?
      </SectionLayout>
      {/* Footer */}
    </div>
  );
}
