import Image from 'next/image';
import Link from 'next/link';
export type SpotifyCardProps = {
  albumImageURL?: string;
  title?: string;
  artist?: string;
  album?: string;
  year?: string;
  url?: string;
  isNowPlaying?: boolean;
  key?: any;
};
export default function Card({
  albumImageURL,
  title,
  artist,
  album,
  year,
  url,
  isNowPlaying,
  key,
}: SpotifyCardProps) {
  return (
    <Link
      href={url ?? 'https://open.spotify.com'}
      rel='noopener noreferrer'
      target='_blank'
    >
      <div
        className={`bg-base ring-content group mb-1 flex max-h-32 flex-row ring-2 ${
          isNowPlaying ? 'max-w-full md:min-w-96' : 'min-w-80'
        } shadow-content transition" overflow-hidden rounded-xl shadow-lg hover:shadow-xl`}
      >
        <div className='max-w-32 overflow-hidden rounded-t-xl'>
          <Image
            className='aspect-square rounded-t-xl transition-transform duration-500 ease-in-out group-hover:scale-105'
            height={1080}
            width={1080}
            src={albumImageURL ?? ''}
            alt={title ?? ''}
          />
        </div>
        <div className='grid max-h-32 grid-rows-3 p-4'>
          <h2 className='card-title group-hover:text-primary-content line-clamp-1 h-fit max-w-full text-start text-lg font-bold'>
            {title}
          </h2>
          <p className='line-clamp-1 h-fit text-sm'>{artist}</p>
          <p className='line-clamp-1 h-fit text-xs italic'>{album}</p>
        </div>
      </div>
    </Link>
  );
}
