import React from 'react';

import {
  LatestPosts,
} from '@/components/ajarwicara/LatestPosts';
import Section from '@/components/home/Section';

export default async function AjarWicaraSection() {
  return (
    <Section
      titlePosition='right'
      title='Latest Post'
      icon='✍️'
      isScrollable={true}
    >
      <React.Suspense>
        <LatestPosts />
      </React.Suspense>
    </Section>
  );
}
