import { Document } from '@contentful/rich-text-types';
import moment from 'moment';

import { env } from '@/lib/constants';
import { getAllPosts, getPostBySlug } from '@/lib/contentful/api';
import { generateSeoMeta } from '@/lib/seo';

import AjarwicaraHeader from '@/components/ajarwicara/post/AjarwicaraHeader';
import PageTransition from '@/components/PageTransition';
import RichTextRenderer from '@/components/RichTextRenderer';

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
  const post = await getPostBySlug(params.slug);
  if (!post) return null;
  const postDate = moment(post.sys.createdAt).format('DD MMMM YYYY');
  const richText = post.fields.body as Document;
  const minRead = Math.ceil(richText.content.length / 200);
  // @ts-ignore
  const img = post.fields.thumbnail ? `https:${post.fields.thumbnail.fields?.file.url || ''}` : 'https://via.placeholder.com/1920x1080';
  return (
    <PageTransition>
      <div className='flex flex-col justify-between gap-8 lg:flex-row lg:gap-16'>
        <div className='h-fit flex-1 lg:sticky lg:top-8 lg:max-w-[40dvw]'>
          <AjarwicaraHeader
            title={post.fields.title as string}
            shorts={post.fields.shorts as string}
            postDate={postDate}
            minRead={minRead}
            img={img}
          />
        </div>
        <div className='mx-auto lg:w-[60dvw] lg:pr-[6dvw]'>
          <RichTextRenderer document={richText} />
        </div>
      </div>
    </PageTransition>
  );
}
