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

export async function getPostByTag(tag: string) {
  // @ts-ignore
  const entries = await client.getEntries({
    content_type: 'ajarwicara',
    'metadata.tags.sys.id[in]': tag,
    order: ['-sys.createdAt'],
  });
  return entries.items;
}

export async function getAllSongs() {
  // @ts-ignore
  const entries = await client.getEntries({
    content_type: 'discography',
    order: ['-sys.createdAt'],
  });
  return entries.items;
}

export async function getSongBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: 'discography',
    'fields.slug': slug,
  });
  return entries.items[0];
}

export async function getAbout() {
  return await client.getEntry("5pI4xoVOFQ1jrblGoRGlWy");
}
