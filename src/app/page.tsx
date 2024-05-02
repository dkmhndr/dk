import React from 'react';

import AnimationHero from '@/components/home/AnimationHero';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className='flex flex-col min-h-full justify-between gap-8'>
        <AnimationHero></AnimationHero>
        {/*<AjarWicaraSection></AjarWicaraSection>*/}
        {/*<SpotifySection></SpotifySection>*/}
      </div>
    </PageTransition>
  );
}
