import { fetchTopTracks } from '@/lib/spotify/api';

import Card from '@/components/spotify/Card';

export const SpotifyTopTrack = async () => {
  const topTracks = await fetchTopTracks();

  // refetch every 10 seconds
  setTimeout(() => {
    SpotifyTopTrack();
  }, 10000);

  if (!topTracks) return null;
  return (
    <div className='animate-marqueeSlow grid grid-flow-col grid-rows-1 gap-6 px-2 py-4 md:grid-rows-2'>
      {topTracks.map((track) => (
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
