

import moment from "moment";

import {getAllSongs} from "@/lib/contentful/api";

import BasicHeader from "@/components/layout/BasicHeader";
import PageTransition from '@/components/PageTransition';
import Card from "@/components/spotify/Card";

export default async function Page() {
  const songs = await getAllSongs();
  
  return (
      <PageTransition>
        <div className='flex flex-col justify-between gap-8 lg:flex-row'>
          <div className='h-fit flex-1 lg:sticky lg:top-8 lg:min-w-[30dvw]'>
            <BasicHeader
                title="Song"
                shorts="Sounds of my thoughts"
            />
          </div>
          <div className='mx-auto w-full'>
            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 py-2">
                {songs.map((song:any) => {
                    const releaseDate = moment(`${song.fields.releaseDate}`).format('DD MMMM YYYY');
                    return (
                        <Card
                            albumImageURL={`https:${song.fields.albumArt.fields.file.url}`}
                            title={`${song.fields.title}`}
                            album={`${song.fields.shorts}`}
                            artist={releaseDate}
                            url={`/song/${song.fields.slug}`}
                            key={song.sys.slug}
                            isNowPlaying={false}
                            newTab={false}
                        />
                    );
                })}
            </div>
          </div>
        </div>
      </PageTransition>
  );
}
