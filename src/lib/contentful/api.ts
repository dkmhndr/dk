import { createClient } from 'contentful';

import { env } from '../constants';

const createClientFunc = createClient;

const client = createClientFunc({
  space: env.contentful.spaceId,
  accessToken: env.contentful.accessToken,
});

export async function getAllPosts({
  order,
  limit,
}: {
  order?: string;
  limit?: number;
}) {
  const entries = await client.getEntries({
    content_type: 'ajarwicara',
    order: [order === 'asc' ? 'sys.createdAt' : '-sys.createdAt'],
    limit: limit,
  });
  return entries.items;
}

export async function getPostBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: 'ajarwicara',
    'fields.slug': slug,
  });
  return entries.items[0];
}
