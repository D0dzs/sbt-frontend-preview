'use client';

import { ThemeProvider } from './Theme-provider';
import { MobileProvider } from './Screen-provider';

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MobileProvider>{children}</MobileProvider>
    </ThemeProvider>
  );
};

export default Providers;
