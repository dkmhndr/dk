'use client';

import { usePathname } from 'next/navigation';
import { IStaticMethods } from 'preline/preline';
import { useEffect } from 'react';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    initHSStaticMethods();
  }, [path]);

  function initHSStaticMethods() {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    } else {
      setTimeout(initHSStaticMethods, 100);
    }
  }
  return null;
}
