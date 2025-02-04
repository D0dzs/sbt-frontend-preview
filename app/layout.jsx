import './globals.css';
import { Comfortaa, Poppins } from 'next/font/google';
import { ReactLenis } from 'lenis/dist/lenis-react';

const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: '400', variable: '--font-comfortaa' });

export const metadata = {
  title: 'BME Solar Boat Team',
};

export default function RootLayout({ children }) {
  return (
    <ReactLenis root>
      <html lang="hu" className={`${poppins.variable} ${comfortaa.variable}`}>
        <body className='bg-bme-black'>
          <main>{children}</main>
        </body>
      </html>
    </ReactLenis>
  );
}
