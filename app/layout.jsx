import { Comfortaa, Poppins } from 'next/font/google';
import { ReactLenis } from 'lenis/dist/lenis-react';

import Navbar from './components/Navbar';
import { siteConfig } from '~/config/site';
import Providers from './components/Providers/Providers';

import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins', preload: true });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: '400', variable: '--font-comfortaa', preload: true });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({ children }) {
  return (
    <ReactLenis root>
      <html lang="hu" className={`${poppins.variable} ${comfortaa.variable}`} suppressHydrationWarning>
        <body className="bg-bme-lprimary dark:bg-bme-dprimary">
          <Providers>
            <main className="!text-bme-black dark:!text-bme-white">
              <Navbar className={'fixed mx-auto mt-0 min-w-screen justify-center lg:mt-6'} />
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ReactLenis>
  );
}
