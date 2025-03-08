import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

import { Separator } from '~/components/ui/separator';
import { siteConfig } from '~/config/site';
import PageLayout from '../_components/(Layouts)/PageLayout';
import Container from '../_components/(Layouts)/Container';

export const metadata = {
  title: 'Kapcsolat',
  description: 'Vedd fel a kapcsolatot a szervezettel.',
};

const Page = () => {
  return (
    <PageLayout className={'grid items-center justify-center'}>
      <h3 className="py-12 text-center text-xl lg:text-3xl">
        Vedd fel velünk a{' '}
        <span className="bg-linear-to-r from-[#12C2E9] from-45% via-[#C471ED] via-80% to-[#F64F59] to-100% bg-clip-text font-semibold text-transparent">
          kapcsolatot
        </span>
        .
      </h3>

      <Container
        className={'mx-auto flex h-full w-[85vw] flex-col justify-between p-8 lg:w-[60vw] lg:flex-row lg:p-12'}
      >
        <div className="items-center justify-center lg:h-full lg:w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={'/placeholder.png'}
            className="mx-auto aspect-square h-fit max-h-48 w-fit max-w-48 lg:mx-auto lg:max-h-80 lg:w-2/3 lg:max-w-80"
            alt="Just a funny guy"
          />
        </div>
        <div className="flex h-fit w-fit flex-col gap-8 self-start text-sm lg:h-full lg:w-full lg:justify-center lg:text-xl">
          <h3 className="flex items-center gap-4">
            <GlobeIcon size={20} strokeWidth={1} className="stroke-bme-blue dark:stroke-bme-orange lg:h-8 lg:w-8" />
            <span>www.solarboatteam.hu</span>
          </h3>
          <h3 className="flex items-center gap-4">
            <MailIcon size={20} strokeWidth={1} className="stroke-bme-blue dark:stroke-bme-orange lg:h-8 lg:w-8" />
            <span>info@solarboatteam.hu</span>
          </h3>
          <div className="flex items-center gap-4">
            <PhoneIcon
              size={20}
              strokeWidth={1}
              className="stroke-bme-blue dark:stroke-bme-orange self-start lg:h-8 lg:w-8"
            />
            <div>
              <p>+36 70 608 7004</p>
              <p className="text-xs opacity-50">Gózcán László, csapatkapitány</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="mx-auto w-[50vw] py-12">
        <Separator className="bg-bme-black/25 dark:bg-bme-white/25" />
      </div>

      <div className="grid items-center justify-center gap-4">
        <h3 className="text-center text-xl lg:text-3xl">Social média elérhetőségeink</h3>
        <div className="mx-auto flex w-2/3 flex-wrap items-center justify-center gap-6 text-base font-bold">
          <Link
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bme-lsecondary dark:bg-bme-dsecondary shadow-bme-black/15 dark:shadow-bme-black/50 dark:hover:bg-bme-dfront dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 font-comfortaa min-w-60 rounded-full px-14 py-2 text-center text-[#0866FF] shadow-md outline-2 transition-colors duration-200 hover:bg-[#D9D9D9]"
          >
            Facebook
          </Link>
          <Link
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bme-lsecondary dark:bg-bme-dsecondary shadow-bme-black/15 dark:shadow-bme-black/50 dark:hover:bg-bme-dfront dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 font-comfortaa min-w-60 rounded-full px-14 py-2 text-center text-[#FF0000] shadow-md outline-2 transition-colors duration-200 hover:bg-[#D9D9D9]"
          >
            YouTube
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bme-lsecondary dark:bg-bme-dsecondary shadow-bme-black/15 dark:shadow-bme-black/50 dark:hover:bg-bme-dfront dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 font-comfortaa min-w-60 rounded-full px-14 py-2 text-center text-[#0A66C2] shadow-md outline-2 transition-colors duration-200 hover:bg-[#D9D9D9]"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bme-lsecondary dark:bg-bme-dsecondary shadow-bme-black/15 dark:shadow-bme-black/50 dark:hover:bg-bme-dfront dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 min-w-60 rounded-full px-14 py-2 text-center shadow-md outline-2 transition-colors duration-200 hover:bg-[#D9D9D9]"
          >
            <p className="font-comfortaa bg-linear-to-r from-[#FEA316] via-[#DA2DA8] via-[#FB504D] via-[33%] via-[66%] to-[#7414EE] bg-clip-text text-transparent">
              Instagram
            </p>
          </Link>
          <Link
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bme-lsecondary dark:bg-bme-dsecondary shadow-bme-black/15 dark:shadow-bme-black/50 dark:hover:bg-bme-dfront dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 min-w-60 rounded-full px-14 py-2 text-center shadow-md outline-2 transition-colors duration-200 hover:bg-[#D9D9D9]"
          >
            <p className="font-comfortaa bg-linear-to-r from-[#3DB9BD] to-[#E4004F] bg-clip-text text-transparent">
              TikTok
            </p>
          </Link>
        </div>
      </div>

      <div className="mx-auto w-[50vw] py-12">
        <Separator className="bg-bme-black/50 dark:bg-bme-white/25" />
      </div>

      <Container className={'mx-auto mb-8 flex h-full w-[85vw] flex-col justify-between p-4 lg:w-[60vw] lg:p-12'}>
        <h1 className="mb-4 text-center text-xl font-semibold lg:text-3xl">Szervezeti adatok</h1>
        <div className="flex flex-col gap-4 lg:gap-1">
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <p className="flex">
              Pályázó neve<span className="hidden lg:block">:</span>
            </p>
            <p className="text-bme-blue dark:text-bme-orange text-xs font-semibold lg:text-base">BME Solar Boat Team</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-2">
            <p className="flex">
              Szervezet neve<span className="hidden lg:block">:</span>
            </p>
            <p className="text-bme-blue dark:text-bme-orange text-xs font-semibold lg:text-base">
              Műszaki Egyetem Gépészmérnök Hallgatóiért Egyesület
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-2">
            <p className="flex">
              Nyilvántartási szám<span className="hidden lg:block">:</span>
            </p>
            <p className="text-bme-blue dark:text-bme-orange text-xs font-semibold lg:text-base">01-02-0016312</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-2">
            <p className="flex">
              Adószám<span className="hidden lg:block">:</span>
            </p>
            <p className="text-bme-blue dark:text-bme-orange text-xs font-semibold lg:text-base">18846759-2-43</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-2">
            <p className="flex">
              Székhely<span className="hidden lg:block">:</span>
            </p>
            <p className="text-bme-blue dark:text-bme-orange text-xs font-semibold lg:text-base">
              1211 Budapest, Szérűraktár út 2/G.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-2">
            <p className="flex">
              Statisztikai számjel<span className="hidden lg:block">:</span>
            </p>
            <p className="text-bme-blue dark:text-bme-orange text-xs font-semibold lg:text-base">
              18846759-9499-529-01
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.0397468940278!2d19.052908476823443!3d47.48132969661904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc536fe8b11f%3A0xbc1392d97a0fd14b!2sBudapest%20University%20of%20Technology%20and%20Economics!5e1!3m2!1sen!2shu!4v1739214513245!5m2!1sen!2shu"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            className="mt-8 max-h-96 min-h-80 rounded-xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </PageLayout>
  );
};

export default Page;
