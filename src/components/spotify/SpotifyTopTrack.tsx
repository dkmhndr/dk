'use client';

import useSWR, { type Fetcher } from 'swr';

import Card from '@/components/spotify/Card';
import { TopTracksResponse } from '@/lib/spotify/api';

const fetcher: Fetcher<TopTracksResponse, string> = (url: string) =>
  fetch(url).then((res) => res.json());

export const SpotifyTopTrack = async () => {
  const { isLoading, data: topTracks } = useSWR(
    '/api/spotify/top-tracks',
    fetcher,
    { refreshInterval: 60000 }
  );

  if (!topTracks) return null;
  return (
    <div className='animate-marqueeSlow grid grid-flow-col grid-rows-1 gap-6 px-2 py-4 md:grid-rows-2'>
      {topTracks && topTracks.map((track) => (
        <Card
          albumImageURL={track.albumImageUrl}
          title={track.title}
          artist={track.artist}
          album={track.album.name}
          year={track.album.release_date}
          url={track.songUrl}
          key={track.id}
          isNowPlaying={false}
        />
      ))}
    </div>
  );
};

export const SpotifyTopTrackSkeleton = () => <div>Loading...</div>;
