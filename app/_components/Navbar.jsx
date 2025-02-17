'use client';

import { AlignJustifyIcon, Command, CommandIcon, LogOutIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { cn, isAdmin } from '~/lib/utils';
import { ModeToggle } from './ModeSwitch';
import { MobileContext } from './Providers/Screen-provider';
import { UserContext } from './Providers/User-provider';
import { useRouter } from 'next/navigation';

const Navbar = ({ className, ...props }) => {
  const { user, logout } = useContext(UserContext);
  const [privileged, setPrivileged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useContext(MobileContext);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/', { scroll: false });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    setPrivileged(isAdmin(user));
  }, [user]);

  return (
    <nav className={`${cn('flex justify-center', className)}`} {...props}>
      {isMobile ? (
        <div
          className={`bg-bme-lprimary dark:bg-bme-dprimary absolute top-0 left-0 z-50 mt-20 block min-w-screen -translate-y-20 transition-all duration-200 lg:hidden ${isOpen ? 'min-h-screen' : 'min-h-0'}`}
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
                      <Link scroll className="ml-8" href={''} onClick={handleToggle}>
                        Csapattagok
                      </Link>
                      <Link scroll className="ml-8" href={''} onClick={handleToggle}>
                        Rólunk+
                      </Link>
                      <Link scroll className="ml-8" href={''} onClick={handleToggle}>
                        Eredményeink
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="min-w-full">
                  <AccordionItem value="item-1">
                    <Link scroll href={''} onClick={handleToggle}>
                      <AccordionTrigger className={'text-2xl'}>HÍREK</AccordionTrigger>
                    </Link>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="min-w-full">
                  <AccordionItem value="item-1">
                    <Link scroll href={''} onClick={handleToggle}>
                      <AccordionTrigger className={'text-2xl'}>GALÉRIA</AccordionTrigger>
                    </Link>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="min-w-full">
                  <AccordionItem value="item-1">
                    <Link scroll href={'/sponsors'} onClick={handleToggle}>
                      <AccordionTrigger className={'text-2xl'}>SZPONZOROK</AccordionTrigger>
                    </Link>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="mt-auto max-h-fit min-h-fit">
                <Link
                  scroll
                  href={'/contact'}
                  className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-16 py-1 text-center text-2xl lg:mt-0 lg:text-xl"
                  onClick={handleToggle}
                >
                  KAPCSOLAT
                </Link>
                {user ? (
                  <div className="flex">
                    <button
                      scroll
                      href={'/login'}
                      className="dark:bg-bme-white bg-bme-black text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit cursor-pointer items-center justify-between gap-1 rounded-full px-12 py-2 text-center text-2xl lg:mt-0 lg:text-xl"
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                    >
                      <LogOutIcon size={24} strokeWidth={2} className="dark:stroke-bme-black stroke-bme-white" />
                    </button>
                    {privileged && (
                      <Link
                        scroll
                        href={'/dashboard'}
                        className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit cursor-pointer items-center justify-between gap-1 rounded-full px-12 py-2 text-center text-2xl lg:mt-0 lg:text-xl"
                        onClick={handleToggle}
                      >
                        <CommandIcon size={24} strokeWidth={2} className="dark:stroke-bme-black stroke-bme-white" />
                      </Link>
                    )}
                  </div>
                ) : (
                  <Link
                    scroll
                    href={'/login'}
                    className="dark:bg-bme-white bg-bme-black text-bme-white dark:text-bme-black mx-auto mt-6 flex w-fit items-center justify-between gap-1 rounded-full px-12 py-1 text-center text-2xl lg:mt-0 lg:text-xl"
                    onClick={handleToggle}
                  >
                    LOGIN
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}
      <div className="outline-bme-dsecondary/15 dark:outline-bme-lsecondary/15 shadow-bme-black/5 lg:shadow-bme-black/20 dark:shadow-bme-white/5 lg:dark:outline-bme-lsecondary/50 bg-bme-lprimary dark:bg-bme-dprimary lg:from-bme-white/50 lg:to-bme-white/30 grid h-20 w-screen items-center rounded-none px-8 shadow-lg outline-2 backdrop-blur-sm transition-all duration-75 lg:w-fit lg:rounded-full lg:bg-transparent lg:bg-linear-to-t xl:w-[60vw] lg:dark:bg-transparent">
        {isMobile ? (
          <div
            id="mobile-navbar"
            className="text-bme-black dark:text-bme-white relative flex items-center justify-between gap-6 lg:hidden"
          >
            <Link href={'/'} scroll>
              <Image priority src={'/navbar/logo.svg'} width={64} height={64} alt="Logo" />
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
        ) : (
          <div
            id="desktop-navbar"
            className="text-bme-black dark:text-bme-white hidden h-full grid-flow-col items-center justify-between gap-4 text-2xl lg:grid"
          >
            <div className="flex items-center gap-6">
              <Link href={'/'} scroll>
                <Image priority src={'/navbar/logo.svg'} width={64} height={64} alt="Logo" />
              </Link>
              <div className="flex gap-4">
                <Link href={''} scroll>
                  Rólunk
                </Link>
                <Link href={''} scroll>
                  Hírek
                </Link>
                <Link href={''} scroll>
                  Galéria
                </Link>
                <Link href={'/sponsors'} scroll>
                  Szponzorok
                </Link>
              </div>
            </div>
            <div className="grid w-full grid-flow-col items-center gap-6">
              {privileged && (
                <Link href={'/dashboard'}>
                  <CommandIcon size={32} strokeWidth={2} className="stroke-bme-black" />
                </Link>
              )}
              {user && (
                <button onClick={handleLogout} className="cursor-pointer">
                  <LogOutIcon size={32} strokeWidth={2} className="stroke-bme-black" />
                </button>
              )}
              <ModeToggle />
              <Link
                href={'/contact'}
                className="dark:bg-bme-orange bg-bme-blue text-bme-white dark:text-bme-black rounded-full px-4 py-1 text-center"
                scroll
              >
                Kapcsolat
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
