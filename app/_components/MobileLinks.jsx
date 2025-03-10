'use client';

import { CommandIcon, LogOutIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';

const MobileLinks = ({ isOpen, handleToggle, user, handleLogout, privileged }) => {
  return (
    <div
      className={`bg-bme-lprimary dark:bg-bme-dprimary absolute top-0 left-0 z-5 mt-20 block w-full -translate-y-20 transition-all lg:hidden ${isOpen ? 'min-h-screen' : 'min-h-0'}`}
    >
      {isOpen && (
        <div
          className={`animate-delay-[200ms] absolute grid h-svh w-full grid-cols-1 justify-between p-12 text-justify ${isOpen && 'animate-fade-down opacity-1'}`}
        >
          <div className="relative">
            <XIcon
              onClick={handleToggle}
              size={48}
              stroke="white"
              className="absolute -top-8 -right-8 z-999 hidden cursor-pointer dark:block"
            />
            <XIcon
              onClick={handleToggle}
              size={48}
              stroke="black"
              className="absolute -top-8 -right-8 z-999 block cursor-pointer dark:hidden"
            />
            <Accordion type="single" collapsible className="min-w-full pt-14">
              <AccordionItem value="item-1">
                <Link scroll href={'/team'} onClick={handleToggle}>
                  <AccordionTrigger className={'text-2xl'}>RÓLUNK</AccordionTrigger>
                </Link>
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
  );
};

export default MobileLinks;
