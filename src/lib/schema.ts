import { site } from '../config/site';
import { social } from '../data/social';

const abs = (path: string) => new URL(path, site.url).href;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    email: site.email,
    slogan: site.tagline,
    description: site.description,
    logo: abs('/images/brand/logo-colour-light.png'),
    image: abs(site.ogImage),
    areaServed: 'Greater Toronto Area, Ontario, Canada and online',
    sameAs: social.map((s) => s.href)
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en-CA'
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.href)
    }))
  };
}

export function courseSchema(opts: {
  name: string; description: string; url: string; teacher: string;
  mode?: string; schedule?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    url: abs(opts.url),
    provider: { '@id': `${site.url}/#organization` },
    instructor: { '@type': 'Person', name: opts.teacher },
    ...(opts.mode
      ? {
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: opts.mode,
            ...(opts.schedule ? { courseSchedule: { '@type': 'Schedule', description: opts.schedule } } : {})
          }
        }
      : {})
  };
}

export function personSchema(opts: { name: string; role: string; url: string; image: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    jobTitle: opts.role,
    url: abs(opts.url),
    image: abs(opts.image),
    description: opts.description,
    worksFor: { '@id': `${site.url}/#organization` }
  };
}

export function articleSchema(opts: {
  title: string; description: string; url: string; image: string;
  author: string; pubDate: Date; updatedDate?: Date;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: abs(opts.url),
    image: abs(opts.image),
    author: { '@type': 'Organization', name: opts.author },
    publisher: { '@id': `${site.url}/#organization` },
    datePublished: opts.pubDate.toISOString(),
    ...(opts.updatedDate ? { dateModified: opts.updatedDate.toISOString() } : {})
  };
}

export function videoSchema(opts: { id: string; title: string; description: string; date?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: opts.title,
    description: opts.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${opts.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${opts.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${opts.id}`,
    ...(opts.date ? { uploadDate: opts.date } : {})
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}
