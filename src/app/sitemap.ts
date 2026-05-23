import { MetadataRoute } from 'next';

const baseUrl = 'https://www.openstrap.net';

const locales = ['en', 'ko', 'ja', 'zh-CN', 'de', 'fr', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }));
}
