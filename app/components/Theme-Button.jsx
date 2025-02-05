'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))} className={'cursor-pointer h-fit'}>
      {theme === 'light' ? <Moon size={32} fill="none" stroke="black" /> : <Sun size={32} fill="none" stroke="black" />}
    </div>
  );
}
