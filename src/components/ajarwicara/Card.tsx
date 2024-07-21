import Image from 'next/image';

export type AjarwicaraCardProps = {
  img?: string;
  title?: string;
  desc?: string;
  date?: string;
  minRead?: number;
  key: string | number;
};

export default function Card({
  img,
  title,
  desc,
  date,
  minRead,
  key,
}: AjarwicaraCardProps) {
  return (
    <div
      className='bg-base ring-content shadow-content group mb-1 flex min-h-full w-72 flex-col overflow-hidden rounded-xl shadow-lg ring-2 transition hover:shadow-xl'
      key={key}
    >
      <div className='relative overflow-hidden rounded-t-xl'>
        <Image
          className='h-full w-full rounded-t-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
          height={1080}
          width={1920}
          src={img ?? 'https://via.placeholder.com/1920x1080'}
          alt='img'
        />
      </div>
      <div className='flex flex-1 flex-col h-full justify-evenly gap-2 p-4'>
        <h2 className='card-title group-hover:text-primary-content line-clamp-2 flex-1 text-start text-lg font-bold'>
          {title}
        </h2>
        <div className='grid grid-cols-2 pb-0 text-justify text-xs text-opacity-50 group-hover:text-opacity-100 md:text-sm'>
          {date && <div className='w-fit font-medium'>{date}</div>}
          {minRead && <div className='text-end'>{minRead} Min Read</div>}
        </div>
        <p className='md:text-md line-clamp-1 text-justify text-sm italic'>
          {desc}
        </p>
      </div>
    </div>
  );
}
