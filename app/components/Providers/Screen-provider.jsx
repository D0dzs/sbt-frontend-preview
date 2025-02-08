'use client';

import { createContext, useState, useEffect } from 'react';

export const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1281px)');
    setIsMobile(mql.matches);

    const listener = () => setIsMobile(mql.matches);
    mql.addEventListener('change', listener);
  }, []);

  return <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>;
};
