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
    <div className="h-8 w-8 cursor-pointer" onClick={() => setTheme(changeThemeValue ?? 'dark')}>
      <SunIcon stroke="black" size={32} className="hidden dark:block" />
      <MoonIcon stroke="black" size={32} className="block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
