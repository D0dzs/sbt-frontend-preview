import localFont from 'next/font/local';

const poppins = localFont({
  name: 'poppins',
  src: './Poppins-Regular.ttf',
  variable: '--font-poppins',
});

const comfortaa = localFont({
  name: 'comfortaa',
  src: './Comfortaa-Regular.ttf',
  variable: '--font-comfortaa',
});

export { comfortaa, poppins };
