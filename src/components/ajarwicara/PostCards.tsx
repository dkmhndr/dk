import {Document} from "@contentful/rich-text-types";
import moment from "moment/moment";
import Image from 'next/image';
import Link from 'next/link';

const PostCards = ({ entries }: { entries: any }) => {
    return (
        <>
            {entries.map((entry: any) => {
                const richText = entry.fields.body as Document;
                const countWords = richText.content.reduce((acc, cur) => {
                  if (cur.nodeType === 'paragraph') {
                    return acc + cur.content.reduce((a, c) => {
                      if (c.nodeType === 'text') {
                        return a + c.value.split(' ').length;
                      }
                      return a;
                    }, 0);
                  }
                  return acc;
                }, 0);
                const minRead = Math.ceil(countWords / 200);
                return(
                    <div key={entry.sys.slug} className="lg:min-h-lg">
                    <Link href={`/ajarwicara/${entry.fields.slug}`}>
                        <div
                            className="mx-auto main-box mb-4 group hover:scale-95 lg:hover:scale-105 p-0 hover:rounded-lg transition-all duration-300 cursor-pointer">
                            <div className="relative">
                                <div className="z-10 absolute p-6 rounded-lg text-start w-full">
                                    <h2 className="text-2xl lg:text-3xl text-white font-bold transition-all duration-200 my-3 drop-shadow-xl">
                                        {entry.fields.title}
                                    </h2>
                                    <h3 className="text-sm text-secondary-300 drop-shadow-md">
                                        {moment(entry.sys.createdAt).format('DD MMMM YYYY')} • {minRead} Minutes
                                        Read
                                    </h3>
                                    <p className="text-primary-400 text-lg drop-shadow-md">
                                        {entry.fields.shorts}
                                    </p>
                                    <div className="py-4 flex flex-wrap items-start justify-start gap-2 w-fit">
                                        {entry.metadata.tags.map((tag: any) => (
                                            <div key={tag.sys.id}>
                                                <Link href={`/ajarwicara/tag/${tag.sys.id}`}>
                                                    <div
                                                        className="text-primary-300 hover:font-bold group-hover:text-primary-200 text-sm lg:text-md">
                                                        ◎ {tag.sys.id}
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-primary-950 group-hover:bg-primary-900 bg-fixed rounded-lg">
                                    <div className="w-full h-full rounded-lg opacity-70">
                                        <Image
                                            src={`https:${entry.fields.thumbnail.fields.file.url}`}
                                            alt={entry.fields.title}
                                            width={500}
                                            height={300}
                                            className="rounded-lg opacity-40 object-cover dark:brightness-50 w-full h-64 grayscale blur-md group-hover:blur-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                )
            })}
            {entries.length === 0 && (
                <h5 className="text-center">No posts yet</h5>
            )}
        </>
    );
};

export default PostCards;