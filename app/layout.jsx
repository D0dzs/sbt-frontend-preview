import './globals.css';
import { Comfortaa, Poppins } from 'next/font/google';
import { ReactLenis } from 'lenis/dist/lenis-react';
import { ThemeProvider } from './components/Providers/Theme-provider';
import Navbar from './components/Navbar';

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
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Navbar className={"hidden lg:flex absolute mx-auto min-w-full justify-center mt-6"} />
            <main className="!text-bme-black dark:!text-bme-white">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ReactLenis>
  );
}
