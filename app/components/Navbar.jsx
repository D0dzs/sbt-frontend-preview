'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '~/lib/utils';
import { ModeToggle } from './ModeSwitch';
import { AlignJustifyIcon, XIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';

const Navbar = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = async () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <nav className={`${cn('z-9999 grid', className)}`} {...props}>
      <div
        className={`bg-bme-lprimary dark:bg-bme-dprimary absolute top-0 left-0 z-50 mt-20 block min-w-screen -translate-y-20 transition-all duration-500 lg:hidden ${isOpen ? 'min-h-screen' : 'min-h-0'}`}
      >
        {isOpen && (
          <div
            className={`animate-delay-[200ms] absolute grid h-svh w-full grid-cols-1 justify-between p-12 text-justify ${isOpen && 'animate-fade-down opacity-1'}`}
          >
            <div>
              <XIcon
                onClick={handleToggle}
                size={48}
                stroke="white"
                className="z-999 mb-8 ml-auto hidden cursor-pointer dark:block"
              />
              <XIcon
                onClick={handleToggle}
                size={48}
                stroke="black"
                className="z-999 mb-8 ml-auto block cursor-pointer dark:hidden"
              />
              <Accordion type="single" collapsible className="min-w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className={'text-2xl'} visibleChevron>
                    RÓLUNK
                  </AccordionTrigger>
                  <AccordionContent className={'flex flex-col gap-4'}>
                    <Link className="ml-8" href={''} onClick={handleToggle}>
                      Csapattagok
                    </Link>
                    <Link className="ml-8" href={''} onClick={handleToggle}>
                      Rólunk+
                    </Link>
                    <Link className="ml-8" href={''} onClick={handleToggle}>
                      Eredményeink
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="min-w-full">
                <AccordionItem value="item-1">
                  <Link href={''} onClick={handleToggle}>
                    <AccordionTrigger className={'text-2xl'}>HÍREK</AccordionTrigger>
                  </Link>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="min-w-full">
                <AccordionItem value="item-1">
                  <Link href={''} onClick={handleToggle}>
                    <AccordionTrigger className={'text-2xl'}>GALÉRIA</AccordionTrigger>
                  </Link>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="min-w-full">
                <AccordionItem value="item-1">
                  <Link href={''} onClick={handleToggle}>
                    <AccordionTrigger className={'text-2xl'}>SZPONZOROK</AccordionTrigger>
                  </Link>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="mt-auto max-h-fit min-h-fit">
              <Link
                href={''}
                className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-16 py-1 text-center text-2xl xl:mt-0 xl:text-xl"
                onClick={handleToggle}
              >
                KAPCSOLAT
              </Link>
              <Link
                href={''}
                className="dark:bg-bme-white bg-bme-black text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-12 py-1 text-center text-2xl xl:mt-0 xl:text-xl"
                onClick={handleToggle}
              >
                LOGIN
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="outline-bme-dsecondary/15 dark:outline-bme-lsecondary/15 shadow-bme-black/10 lg:shadow-bme-black/20 dark:shadow-bme-white/10 lg:dark:outline-bme-lsecondary/50 bg-bme-lprimary dark:bg-bme-dprimary lg:from-bme-white/50 lg:to-bme-white/30 grid h-20 w-screen items-center rounded-none px-8 shadow-lg outline-2 backdrop-blur-sm transition-all lg:w-[80vw] lg:rounded-full lg:bg-transparent lg:bg-linear-to-t xl:w-[60vw] lg:dark:bg-transparent">
        <div
          id="desktop-navbar"
          className="text-bme-black dark:text-bme-white hidden h-full grid-flow-col items-center justify-between text-2xl lg:grid"
        >
          <div className="flex items-center gap-6">
            <Link href={'/'}>
              <Image priority src={'/navbar/logo.svg'} width={64} height={64} alt="Logo" />
            </Link>
            <div className="flex gap-4">
              <Link href={''}>Rólunk</Link>
              <Link href={''}>Hírek</Link>
              <Link href={''}>Galéria</Link>
              <Link href={''}>Szponzorok</Link>
            </div>
          </div>
          <div className="grid w-full grid-flow-col items-center gap-6">
            <ModeToggle />
            <Link
              href={''}
              className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black rounded-full px-4 py-1 text-center"
            >
              Kapcsolat
            </Link>
          </div>
        </div>
        <div
          id="mobile-navbar"
          className="text-bme-black dark:text-bme-white relative flex items-center justify-between gap-6 lg:hidden"
        >
          <Link href={''}>
            <Image priority src={'/navbar/logo.svg'} width={64} height={64} alt="Logo" className="h-16 w-16" />
          </Link>
          <ModeToggle />
          <AlignJustifyIcon
            onClick={handleToggle}
            size={48}
            stroke="white"
            className="hidden cursor-pointer dark:block"
          />
          <AlignJustifyIcon
            onClick={handleToggle}
            size={48}
            stroke="black"
            className="block cursor-pointer dark:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
