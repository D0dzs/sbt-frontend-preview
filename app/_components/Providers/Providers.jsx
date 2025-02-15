'use client';

import { ThemeProvider } from './Theme-provider';
import { MobileProvider } from './Screen-provider';
import { UserProvider } from './User-provider';

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ThemeProvider attribute="class" defaultTheme="system">
        <MobileProvider>{children}</MobileProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default Providers;
