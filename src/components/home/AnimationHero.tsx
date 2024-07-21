'use client';

import Image from "next/image";
import React from 'react';

import SocialsButton from '@/components/buttons/SocialsButton';
import Title from '@/components/home/Title';

interface AnimationHeroProps {
    title?: string;
    img?: string;
    description?: string | React.ReactNode;
}

export default function AnimationHero({
    title = 'Lives in 0s and 1s with ♪ in between',
    img,
    description = `In my life's mini orchestra, I compose harmonious code and serenade my
        symphonies of thoughts.`
                                      }: AnimationHeroProps) {
  return (
    <div className='main-box h-full min-h-96 w-full overflow-clip p-8 flex flex-col justify-between'>
      <div>
          <div className='flex items-center justify-start gap-4'>
              {img && <Image src={img} alt='Img' className='w-24 h-24 rounded-full hover:scale-105 transition-all duration-300 ease-in-out' width={96} height={96} />}
              <Title title={title} />
          </div>
          <div className='mt-6 text-lg md:text-xl mb-2'>
              {description}
          </div>
      </div>
      <SocialsButton/>
    </div>
  );
}
