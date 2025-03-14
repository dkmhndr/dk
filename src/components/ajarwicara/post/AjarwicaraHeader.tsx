import Image from 'next/image';
import Link from 'next/link';

import ArrowLink from "@/components/links/ArrowLink";


export type AjarwicaraHeaderProps = {
    title: string;
    img?: string;
    postDate?: string;
    minRead?: number;
    shorts?: string;
    tags?: string[];
    links?: [
        {
            href: string;
            direction: "left" | "right";
            text: string;
        }
    ]
};
export default function AjarwicaraHeader({
                                             title,
                                             img,
                                             postDate,
                                             minRead,
                                             shorts,
                                             tags,
                                             links
                                         }: AjarwicaraHeaderProps) {
    return (
        <div className='main-box mx-auto p-0 lg:h-[82dvh] flex flex-col'>
            <div className='relative'>
                <div className='absolute bottom-0 left-0 z-10 p-4 md:p-8 lg:hidden'>
                    <h1 className='text-white line-clamp-2 py-2 text-3xl font-bold drop-shadow-lg md:text-5xl'>
                        {title}
                    </h1>
                    <p className='mt-2 text-base text-white drop-shadow-lg md:mt-4  md:text-xs'>
                        {postDate} - {minRead} Min. Read
                    </p>
                    <p className='mt-2 line-clamp-1 text-base text-white drop-shadow-lg  md:mt-4 md:text-sm'>
                        {shorts}
                    </p>
                </div>
                {img &&
                    <div className='bg-primary-500 rounded-lg'>
                        <div className='bg-primary-800 w-full rounded-lg opacity-70 lg:bg-none lg:opacity-100'>
                            <Image
                                src={img}
                                alt={title}
                                loading='lazy'
                                height={1080}
                                width={1920}
                                className='h-64 w-full rounded-lg object-cover opacity-40 grayscale lg:opacity-100 lg:grayscale-0 blur-sm lg:blur-0'
                            />
                        </div>
                    </div>
                }
            </div>
            <div className='hidden p-4 lg:block flex-1'>
                <div className="w-full h-full flex flex-col justify-between">
                    <div>
                        <h1 className='text-content line-clamp-3 md:line-clamp-none py-2 text-2xl font-bold drop-shadow-lg'>
                            {title}
                        </h1>
                        <p className='text-content mt-2 drop-shadow-lg text-sm'>
                            {postDate} - {minRead} Min. Read
                        </p>
                        <p className='mt-2 line-clamp-3 text-base text-gray-700 dark:text-gray-300 drop-shadow-lg  text-md'>
                            {shorts}
                        </p>
                    </div>
                    <div>
                        {tags && !!tags.length && <div className='py-8'>
                            <p>Tags</p>
                            <div className='h-0.5 w-full bg-gray-200 mt-2 mb-4'></div>
                            <div className="flex gap-3 justify-evenly">
                                {tags.map((tag) => (
                                    <Link key={tag} href={`/ajarwicara/tag/${tag}`}
                                          className='text-sm text-black dark:text-white hover:font-bold transition-all duration-300 rounded-full'>
                                        ◎ {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>}
                        <div className="flex flex-col gap-8">
                            {links && links.map((link) => (
                                <ArrowLink key={link.href} href={`/ajarwicara/${link.href}`} direction={link.direction} className="main-box p-4 md:mr-auto hover:bg-primary hover:shadow-xlHover min-w-full justify-end transition-all">
                                    {link.text}
                                </ArrowLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
