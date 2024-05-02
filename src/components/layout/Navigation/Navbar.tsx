'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '@/components/layout/Navigation/ThemeToggle';

export default function Navbar() {
  const pathName = usePathname();
  const links = [
    {
      name: '/dk',
      href: '/',
    },
    // {
    //   name: '/ajarwicara',
    //   href: '/ajarwicara',
    // },
    // {
    //   name: '/song',
    //   href: '/song',
    // },
    // {
    //   name: '/about',
    //   href: '/about',
    // },
  ];
  const currentLink = links.filter((link) => link.href === pathName)[0] ?? {};
  const restLinks = links.filter((link) => link.href !== pathName) ?? [];
  const pageTitle = pathName.includes('/ajarwicara/')
    ? pathName.replaceAll('/ajarwicara/', '')
    : currentLink?.name;

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true));

  if (!hasMounted) return null;
  return (
    <div className='from-base sticky bottom-0 z-50 flex w-full flex-wrap bg-gradient-to-t from-85% text-sm md:flex-nowrap md:justify-start'>
      <nav
        className='main-box border-content bg-base relative mx-4 my-6 w-full max-w-[85rem] rounded-xl border px-4 py-3 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-8'
        aria-label='Global'
      >
        <div className='flex w-full items-center justify-between'>
          <Link
            className='text-truncate line-clamp-1 text-xl font-semibold '
            href={currentLink?.href ?? '/'}
            aria-label='dk'
          >
            {pageTitle}
          </Link>
          <div className='md:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle bg-base border-content text-content dark:focus:ring-content flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1'
              data-hs-collapse='#navbar-collapse-with-animation'
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
            >
              <svg
                className='hs-collapse-open:hidden h-4 w-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='3' x2='21' y1='6' y2='6' />
                <line x1='3' x2='21' y1='12' y2='12' />
                <line x1='3' x2='21' y1='18' y2='18' />
              </svg>
              <svg
                className='hs-collapse-open:block hidden h-4 w-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-with-animation'
          className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block'
        >
          <div className='mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:ps-7'>
            {restLinks.map((link, index) => (
              <Link
                key={index}
                className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
