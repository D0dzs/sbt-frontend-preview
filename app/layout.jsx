import { ReactLenis } from 'lenis/dist/lenis-react';

import { siteConfig } from '~/config/site';

import Providers from './_components/Providers/Providers';

import './globals.css';
import { comfortaa, poppins } from './styles/fonts';
import { Toaster } from '~/components/ui/sonner';

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
            <main className="!text-bme-black dark:!text-bme-white">{children}</main>
            <Toaster />
          </Providers>
        </body>
      </html>
    </ReactLenis>
  );
}
