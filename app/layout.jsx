import './globals.css';
import { Comfortaa, Poppins } from 'next/font/google';
import { ReactLenis } from 'lenis/dist/lenis-react';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/Providers/Theme-provider';

const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: '400', variable: '--font-comfortaa' });

export const metadata = {
  title: 'BME Solar Boat Team',
};

export default function RootLayout({ children }) {
  return (
    <ReactLenis root>
      <html lang="hu" className={`${poppins.variable} ${comfortaa.variable}`} suppressHydrationWarning>
        <body className="bg-bme-lprimary dark:bg-bme-dprimary relative">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main className="!text-bme-black dark:!text-bme-white">
              <Navbar className={'fixed mx-auto mt-6 hidden min-w-full justify-center lg:flex'} />
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ReactLenis>
  );
}
