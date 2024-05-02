import Image from 'next/image';

export type AjarwicaraHeaderProps = {
  title: string;
  img: string;
  postDate: string;
  minRead: number;
  shorts: string;
};
export default function AjarwicaraHeader({
  title,
  img,
  postDate,
  minRead,
  shorts,
}: AjarwicaraHeaderProps) {
  return (
    <div className='main-box mx-auto p-0 lg:h-[75dvh]'>
      <div className='relative'>
        <div className='absolute bottom-0 left-0 z-10 p-4 md:p-8 lg:hidden'>
          <h1 className='text-content line-clamp-2 py-2 text-3xl font-bold drop-shadow-lg md:text-5xl'>
            {title}
          </h1>
          <p className='mt-2 text-base text-gray-200 drop-shadow-lg md:mt-4  md:text-xs'>
            {postDate} - {minRead} Min. Read
          </p>
          <p className='mt-2 line-clamp-1 text-base text-gray-200 drop-shadow-lg  md:mt-4 md:text-sm'>
            {shorts}
          </p>
        </div>
        <div className='bg-secondary rounded-lg '>
          <div className='bg-primary w-full rounded-lg opacity-70 lg:bg-none lg:opacity-100'>
            <Image
              src={img}
              alt={title}
              loading='lazy'
              height={1080}
              width={1920}
              className='h-64 w-full rounded-lg object-cover opacity-40 grayscale lg:opacity-100 lg:grayscale-0'
            />
          </div>
        </div>
      </div>
      <div className='hidden p-4 lg:block'>
        <h1 className='text-content line-clamp-3 py-2 text-3xl  font-bold drop-shadow-lg md:text-3xl'>
          {title}
        </h1>
        <p className='text-secondary mt-2 text-base drop-shadow-lg md:mt-4 md:text-xs'>
          {postDate} - {minRead} Min. Read
        </p>
        <p className='mt-2 line-clamp-3 text-base text-gray-700 drop-shadow-lg  md:mt-4 md:text-sm'>
          {shorts}
        </p>
      </div>
    </div>
  );
}
