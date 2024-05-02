export const env = {
  contentful: {
    spaceId: process.env.CONTENTFUL_SPACE_ID || '',
    previewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  },
  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID || '',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
    timeRange: process.env.SPOTIFY_TIME_RANGE || 'short_term',
  },
  url: {
    website: process.env.WEBSITE_URL || '',
  },
};
