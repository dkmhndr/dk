import { Document } from '@contentful/rich-text-types';
import moment from 'moment';
import Link from 'next/link';

import { getAllPosts } from '@/lib/contentful/api';

import Card from '@/components/ajarwicara/Card';

export const LatestPosts = async () => {
  const latestPosts = await getAllPosts({ limit: 5, order: 'desc' });

  return (
    <div className='flex-no-wrap flex gap-6 px-2 py-4'>
      {latestPosts.map((post) => {
        const richText = post.fields.body as Document;
        const minRead = Math.ceil(richText.content.length / 200);
        const postDate = moment(post.sys.createdAt).format('DD/MMM/YY');
          // @ts-ignore
          const img = post.fields.thumbnail ? `https:${post.fields.thumbnail.fields?.file.url || ''}` : 'https://via.placeholder.com/1920x1080';
        return (
          <Link href={`/ajarwicara/${post.fields.slug}`} key={post.sys.id}>
            <Card
              img={img}
              title={post.fields.title as string}
              desc={post.fields.shorts as string}
              date={postDate}
              key={post.sys.id}
              minRead={minRead}
            />
          </Link>
        );
      })}
    </div>
  );
};

export const LatestPostsSkeleton = () => (
  <div>
    <Card img='https://via.placeholder.com/1920x1080' key={1} />
    <Card img='https://via.placeholder.com/1920x1080' key={2} />
    <Card img='https://via.placeholder.com/1920x1080' key={3} />
    <Card img='https://via.placeholder.com/1920x1080' key={4} />
    <Card img='https://via.placeholder.com/1920x1080' key={5} />
  </div>
);
