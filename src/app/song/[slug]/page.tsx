import { Document } from '@contentful/rich-text-types';
import moment from 'moment';
import React from "react";

import { env } from '@/lib/constants';
import {getAllSongs, getSongBySlug} from '@/lib/contentful/api';
import { generateSeoMeta } from '@/lib/seo';

import ArrowLink from "@/components/links/ArrowLink";
import PageTransition from '@/components/PageTransition';
import RichTextRenderer from '@/components/RichTextRenderer';
import SongHeader from "@/components/song/SongHeader";

export async function generateStaticParams() {
  const songs = await getAllSongs();
  return songs.map((song) => {
    return {
      slug: song.fields.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const song = await getSongBySlug(params.slug);
  if (!song) return {};
  const songUrl = new URL(env.url.website + '/song/' + params.slug);
  // @ts-ignore
  const imageUrl = new URL(`${env.url.website}${song?.fields?.thumbnail?.fields.file.url || ''}`);
  return {
    ...generateSeoMeta({
      title: song.fields.title as string,
      description: song.fields.summary as string,
      alternates: { canonical: songUrl.toString() },
      openGraph: {
        title: song.fields.title as string,
        description: song.fields.shorts as string,
        url: songUrl,
        type: 'article',
        publishedTime: song.sys.createdAt,
        modifiedTime: song.sys.updatedAt,
        authors: ['Dika Mahendra'],
        tags: song.fields.tags as string[],
        siteName: 'Dika Mahendra',
        images: [
          {
            url: `/og/content?title=${encodeURIComponent(
              song.fields.title as string
            )}&link=${encodeURIComponent(
              songUrl.toString()
            )}&image=${encodeURIComponent(imageUrl.toString())}`,
            width: 1200,
            height: 630,
            alt: song.fields.title as string,
          },
        ],
      },
    }),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const songs = await getAllSongs();
  const song = await getSongBySlug(params.slug);
  const index = songs.findIndex((p) => p.sys.id === song.sys.id);
  if (!song) return null;
  const releaseDate = moment(song.sys.createdAt).format('DD MMMM YYYY');
  const richText = song.fields.story as Document;
  // @ts-ignore
  const img = song.fields.albumArt? `https:${song.fields.albumArt.fields.file.url || ''}` : 'https://via.placeholder.com/1920x1080';
    const links = [];
    if (index > 0) {
        links.push({
            href: songs[index - 1].fields.slug,
            direction: 'left',
            text: songs[index - 1].fields.title,
        });
    }
    if (index < songs.length - 1) {
        links.push({
            href: songs[index + 1].fields.slug,
            direction: 'right',
            text: songs[index + 1].fields.title,
        });
    }
	return (
    <PageTransition>
      <div className='flex flex-col justify-between gap-8 lg:flex-row'>
        <div className='h-fit flex-1 lg:sticky lg:top-8 lg:max-w-[35dvw]'>
          <SongHeader
            title={song.fields.title as string}
            shorts={song.fields.shorts as string}
            releaseDate={releaseDate}
            spotify={`${song.fields.spotify}`}
            appleMusic={`${song.fields.appleMusic}`}
            youtube={`${song.fields.youtube}`}
            img={img}
            links={links as [{ href: string; direction: "left" | "right"; text: string }]}
          />
        </div>
        <div className='mx-auto w-full lg:w-fit'>
          <RichTextRenderer document={richText} />
          <div className="lg:hidden">
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
    </PageTransition>
    );
}
