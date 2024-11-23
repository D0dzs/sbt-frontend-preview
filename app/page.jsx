import { HeroParallax } from "~/components/(hero)/HeroParallax";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <div className="bg-black">
        <img src={'/parallax/rock.webp'} className="-translate-y-12 lg:-translate-y-28 w-full h-fit" alt="rocks" />
        <section className="relative min-h-screen px-8 lg:px-0 bg-black text-neutral-50"></section>
      </div>
    </>
  );
}
