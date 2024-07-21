import {fab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from "next/link";
import React from "react";

import ArrowLink from "@/components/links/ArrowLink";


export type AjarwicaraHeaderProps = {
    title: string;
    img?: string;
    releaseDate?: string;
    shorts?: string;
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    links?: [
        {
            href: string;
            direction: "left" | "right";
            text: string;
        }
    ]
};
export default function SongHeader({
                                             title,
                                             img,
                                             releaseDate,
                                             shorts,
    spotify,
    appleMusic,
    youtube,
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
                        {releaseDate}
                    </p>
                    <p className='mt-2 line-clamp-1 text-base text-white drop-shadow-lg  md:mt-4 md:text-sm'>
                        {shorts}
                    </p>
                    <div className="flex gap-3 text-white text-xl my-4">
                        <Link
                            className='hover:text-primary-500 transition-colors duration-300'
                            href={`${youtube}`}
                        >
                            <FontAwesomeIcon icon={fab.faYoutube}></FontAwesomeIcon>
                        </Link>
                        <Link
                            className='hover:text-primary-500 transition-colors duration-300'
                            href={`${spotify}`}
                        >
                            <FontAwesomeIcon icon={fab.faSpotify}></FontAwesomeIcon>
                        </Link>
                        <Link
                            className='hover:text-primary-500 transition-colors duration-300'
                            href={`${appleMusic}`}
                        >
                            <FontAwesomeIcon icon={fab.faApple}></FontAwesomeIcon>
                        </Link>
                    </div>
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
                            {releaseDate}
                        </p>
                        <p className='mt-2 line-clamp-3 text-base text-gray-700 dark:text-gray-300 drop-shadow-lg  text-md'>
                            {shorts}
                        </p>
                        <div className="flex gap-3 text-4xl my-4">
                            <Link
                                className='hover:text-primary-500 transition-colors duration-300'
                                href={`${youtube}`}
                            >
                                <FontAwesomeIcon icon={fab.faYoutube}></FontAwesomeIcon>
                            </Link>
                            <Link
                                className='hover:text-primary-500 transition-colors duration-300'
                                href={`${spotify}`}
                            >
                                <FontAwesomeIcon icon={fab.faSpotify}></FontAwesomeIcon>
                            </Link>
                            <Link
                                className='hover:text-primary-500 transition-colors duration-300'
                                href={`${appleMusic}`}
                            >
                                <FontAwesomeIcon icon={fab.faApple}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-8">
                            {links && links.map((link) => (
                                <ArrowLink key={link.href} href={`/song/${link.href}`} direction={link.direction}
                                           className="main-box p-4 md:mr-auto hover:bg-primary hover:shadow-xlHover min-w-full justify-end transition-all">
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
