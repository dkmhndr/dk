import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';

import '../styles/globals.css';

import { generateSeoMeta } from '@/lib/seo';

import Navbar from '@/components/layout/Navigation/Navbar';
import PrelineScript from '@/components/PrelineScript';
import { ThemeProvider } from '@/components/provider';
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const generateMetadata = async (): Promise<Metadata> =>
  generateSeoMeta();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className={jakarta.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <main className='mx-auto flex flex-col justify-between h-dvh w-full max-w-[85rem]'>
            <div className='px-4 pt-6 xl:px-8'>{children}</div>
            <Navbar />
          </main>
        </ThemeProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
