'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Link
      className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
      href=''
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      /{theme}
    </Link>
  );
}
