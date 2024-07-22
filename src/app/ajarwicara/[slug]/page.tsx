import { Document } from '@contentful/rich-text-types';
import moment from 'moment';
import Link from "next/link";

import { env } from '@/lib/constants';
import { getAllPosts, getPostBySlug } from '@/lib/contentful/api';
import { generateSeoMeta } from '@/lib/seo';

import AjarwicaraHeader from '@/components/ajarwicara/post/AjarwicaraHeader';
import ArrowLink from "@/components/links/ArrowLink";
import PageTransition from '@/components/PageTransition';
import RichTextRenderer from '@/components/RichTextRenderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function generateStaticParams() {
  const posts = await getAllPosts({ order: 'desc', limit: 1000 });
  return posts.map((post) => {
    return {
      slug: post.fields.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const postUrl = new URL(env.url.website + '/ajarwicara/' + params.slug);
  // @ts-ignore
  const imageUrl = new URL(`${env.url.website}${post?.fields?.thumbnail?.fields.file.url || ''}`);
  return {
    ...generateSeoMeta({
      title: post.fields.title as string,
      description: post.fields.summary as string,
      alternates: { canonical: postUrl.toString() },
      openGraph: {
        title: post.fields.title as string,
        description: post.fields.shorts as string,
        url: postUrl,
        type: 'article',
        publishedTime: post.sys.createdAt,
        modifiedTime: post.sys.updatedAt,
        authors: ['Dika Mahendra'],
        tags: post.fields.tags as string[],
        siteName: 'Dika Mahendra',
        images: [
          {
            url: `/og/content?title=${encodeURIComponent(
              post.fields.title as string
            )}&link=${encodeURIComponent(
              postUrl.toString()
            )}&image=${encodeURIComponent(imageUrl.toString())}`,
            width: 1200,
            height: 630,
            alt: post.fields.title as string,
          },
        ],
      },
    }),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await getAllPosts({ order: 'desc', limit: 1000 });
  const post = await getPostBySlug(params.slug);
  const index = posts.findIndex((p) => p.sys.id === post.sys.id);
  if (!post) return null;
  const postDate = moment(post.sys.createdAt).format('DD MMMM YYYY');
  const richText = post.fields.body as Document;
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
  // @ts-ignore
  const img = post.fields.thumbnail ? `https:${post.fields.thumbnail.fields?.file.url || ''}` : 'https://via.placeholder.com/1920x1080';
	const tags = post.metadata.tags && post.metadata.tags.map((tag) => tag.sys.id);
    const links = [];
    if (index > 0) {
        links.push({
            href: posts[index - 1].fields.slug,
            direction: 'left',
            text: posts[index - 1].fields.title,
        });
    }
    if (index < posts.length - 1) {
        links.push({
            href: posts[index + 1].fields.slug,
            direction: 'right',
            text: posts[index + 1].fields.title,
        });
    }
	return (
    <PageTransition>
      <div className='flex flex-col justify-between gap-8 lg:flex-row'>
        <div className='h-fit flex-1 lg:sticky lg:top-8  lg:min-w-[27dvw]'>
          <AjarwicaraHeader
            title={post.fields.title as string}
            shorts={post.fields.shorts as string}
            postDate={postDate}
            minRead={minRead}
            img={img}
            tags={tags}
            links={links as [{ href: string; direction: "left" | "right"; text: string }]}
          />
        </div>
        <div className='mx-auto'>
          <RichTextRenderer document={richText} />
          <div className="lg:hidden">
            <div>
              {!!tags.length && <div className='py-8'>
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
                    <ArrowLink key={link.href} href={`/ajarwicara/${link.href}`} direction={link.direction}
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
