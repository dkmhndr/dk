import React from 'react';

import Section from '@/components/home/Section';
import { NowPlaying } from '@/components/spotify/SpotifyNowPlaying';
import {
  SpotifyTopTrack,
  SpotifyTopTrackSkeleton,
} from '@/components/spotify/SpotifyTopTrack';
export default async function SpotifySection() {
  return (
    <Section
      titlePosition='left'
      title='Current Earworm'
      icon='🎧'
      titleChild={<NowPlaying />}
    >
      <React.Suspense fallback={<SpotifyTopTrackSkeleton />}>
        <SpotifyTopTrack />
      </React.Suspense>
    </Section>
  );
}
