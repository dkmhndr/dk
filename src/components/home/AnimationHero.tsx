'use client';

import React from 'react';

import SocialsButton from '@/components/buttons/SocialsButton';
import Title from '@/components/home/Title';

export default function AnimationHero() {
  return (
    <div className='main-box h-full min-h-96 w-full overflow-clip p-8'>
      {/*<Title title='Lives in 0s and 1s with ♪ in between' />*/}
      <Title title={`I'm still working on this sh*t`} />
      <h2 className='mt-6 text-lg md:text-xl'>
          Kindly check again later ;)<br/>
          Anyway, happy birthday, me! 🎉🥳
        {/*In my life's mini orchestra, I compose harmonious code and serenade my*/}
        {/*symphonies of thoughts.*/}
      </h2>
      <SocialsButton></SocialsButton>
    </div>
  );
}
