'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import { Button } from '~/components/ui/button';

const page = () => {
  const { setTheme, resolvedTheme: theme } = useTheme();

  const handleClick = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log('theme changed to: ' + theme + '!');
  }, [theme, setTheme]);

  return (
    <Button className="group/toggle h-8 w-8 px-0 cursor-pointer" onClick={handleClick}>
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default page;
