import { ReactLenis } from 'lenis/dist/lenis-react';

import { siteConfig } from '~/config/site';

import Navbar from './_components/Navbar';
import Providers from './_components/Providers/Providers';

import './globals.css';
import { comfortaa, poppins } from './styles/fonts';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({ children }) {
  return (
    <ReactLenis root>
      <html lang="hu" className={`${poppins.variable} ${comfortaa.variable}`} suppressHydrationWarning>
        <body className="!bg-bme-lprimary dark:!bg-bme-dprimary font-poppins">
          <Providers>
            <Navbar className={'fixed mt-0 w-full lg:mt-6'} />
            <main className="!text-bme-black dark:!text-bme-white">{children}</main>
          </Providers>
        </body>
      </html>
    </ReactLenis>
  );
}
