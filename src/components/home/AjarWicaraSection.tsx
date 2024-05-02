import React from 'react';

import {
  LatestPosts,
  LatestPostsSkeleton,
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
      <React.Suspense fallback={<LatestPostsSkeleton />}>
        <LatestPosts />
      </React.Suspense>
    </Section>
  );
}
