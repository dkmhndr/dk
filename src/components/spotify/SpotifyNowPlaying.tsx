'use client';

import useSWR, { type Fetcher } from 'swr';

import { NowPlayingResponse } from '@/lib/spotify/api';

import Card from '@/components/spotify/Card';

const fetcher: Fetcher<NowPlayingResponse, string> = (url: string) =>
  fetch(url).then((res) => res.json());

export const NowPlaying = () => {
  const { isLoading, data: nowPlaying } = useSWR(
    '/api/spotify/now-playing',
    fetcher,
    { refreshInterval: 10000 }
  );

  if (isLoading) return <NowPlayingSkeleton />;
  if (!nowPlaying?.isPlaying) return null;

  return (
    <Card
      albumImageURL={nowPlaying?.albumImageUrl}
      title={nowPlaying?.title}
      artist={nowPlaying?.artist}
      album={nowPlaying?.album}
      year={nowPlaying?.year}
      url={nowPlaying?.songUrl}
      isNowPlaying={nowPlaying?.isPlaying}
      key={nowPlaying?.id}
    />
  );
};

export const NowPlayingSkeleton = () => <div>Loading...</div>;
