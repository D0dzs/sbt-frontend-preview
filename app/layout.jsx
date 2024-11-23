import './globals.css';

export const metadata = {
  title: 'BME Solar Boat Team',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
