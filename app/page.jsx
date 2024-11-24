import Image from 'next/image';
import { HeroParallax } from '~/components/(hero)/HeroParallax';

export default function Home() {
  return (
    <>
      <HeroParallax />
      <div className="bg-black relative">
        <Image
          src="/parallax/rock.webp"
          className="z-50 absolute -top-20 lg:block lg:-translate-y-28 lg:w-full lg:h-fit"
          alt="rocks"
          width={2000}
          height={411}
        />
        <section className="relative min-h-screen px-8 lg:px-0 bg-black text-neutral-50"></section>
      </div>
    </>
  );
}
