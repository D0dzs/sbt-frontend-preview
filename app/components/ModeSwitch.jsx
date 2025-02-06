'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [changeThemeValue, setChangeThemeValue] = useState();

  useEffect(() => {
    setChangeThemeValue(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  useEffect(() => {
    const checkDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const newValue = theme === 'dark' ? 'light' : theme === 'light' ? 'dark' : checkDarkTheme ? 'light' : 'dark';
    setChangeThemeValue(newValue);
  }, []);

  return (
    <div
      className="bg-bme-orange dark:bg-bme-blue h-fit w-fit cursor-pointer rounded-full p-3"
      onClick={() => setTheme(changeThemeValue ?? 'dark')}
    >
      <div className="relative flex w-full items-center gap-8">
        <div
          className={`bg-bme-white absolute z-1 ml-auto h-6 w-6 translate-x-0 rounded-full ${theme === 'dark' && 'translate-x-[175%]'}`}
        />
        <MoonIcon size={16} stroke="white" />
        <SunIcon size={16} stroke="black" />
      </div>
    </div>
  );
}
