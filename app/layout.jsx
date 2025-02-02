import './globals.css';
import { Comfortaa, Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: '400', variable: '--font-comfortaa' });

export const metadata = {
  title: 'BME Solar Boat Team',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className={`${poppins.variable} ${comfortaa.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
