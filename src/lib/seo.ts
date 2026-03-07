import { Metadata } from 'next';

export const siteConfig = {
  name: 'One Up Solar',
  description: 'Production-ready modern web project for a local business website.',
  url: 'https://oneupsolar.com',
  ogImage: 'https://oneupsolar.com/og.jpg',
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@OneUpSolar',
  },
  metadataBase: new URL(siteConfig.url),
};
