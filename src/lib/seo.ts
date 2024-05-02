import { Metadata } from 'next';

import { env } from '@/lib/constants';

type SeoProps = Metadata & {
  newOg?: { url: URL };
};

const title = 'Dika Mahendra';
const description = 'Lives in 0s and 1s with ♪ in between';

const defaultMeta: Metadata = {
  metadataBase: new URL('https://dikamahendra.com'),
  title: {
    default: title,
    template: '%s / Dika Mahendra',
  },
  description: description,
  alternates: {
    canonical: env.url.website,
  },
  openGraph: {
    title: title,
    description: description,
    url: env.url.website,
    type: 'website',
    siteName: title,
  },
  twitter: {
    creator: '@dkmhndr_',
    site: '@dkmhndr_',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const generateSeoMeta = (seo?: SeoProps): Metadata => {
  if (!seo) return defaultMeta;

  if (seo.newOg) {
    const { url } = seo.newOg;

    const newOg: Metadata['openGraph'] = {
      ...defaultMeta.openGraph,
      url: url,
      images: [
        {
          url: `/og/main?title=${url.pathname}`,
          width: 1200,
          height: 630,
          alt: 'Dika Mahendra',
        },
      ],
    };

    return {
      ...defaultMeta,
      ...seo,
      openGraph: newOg,
    };
  }

  return {
    ...defaultMeta,
    ...seo,
  };
};
