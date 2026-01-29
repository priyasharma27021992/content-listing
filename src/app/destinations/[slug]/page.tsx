// SEO-first content (server-rendered, cached)
// Client-side filters (category, season, budget)
// “Best time to visit” + FAQ (structured data)
// Behavior-focused tests (not implementation)

import { readFile } from 'fs/promises';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import path from 'path';
import { getDestinationData } from './data';
import FAQSchema from '../FAQSchema';

// generateMetadata() for title/description/canonical
// JSON-LD for FAQ (FAQPage)
// OpenGraph tags

/*
next/image with correct sizes
lazy loading for below-the-fold card images
avoid layout shift (set width/height or aspect ratio)
add a small “perf debug” panel locally (optional): show TTFB, cache hit header
*/

export const revalidate = 3600; // 1hour

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const data = await getDestinationData(slug);

    const title =
      data.meta?.title ?? `${data.hero?.title ?? slug} – Travel Guide`;
    const description =
      data.meta?.description ?? data.hero?.intro ?? 'Destination guide.';

    const canonical = data.meta?.canonical ?? `/destinations/${slug}`;
    const ogImage = data.hero?.image?.src ?? '/images/og-default.jpg';

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        images: [{ url: ogImage, alt: data.hero?.image?.alt ?? title }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    };
  } catch {
    return {};
  }
}

const DestinationsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'data', `${slug}.json`);
  let data;
  try {
    const file = await readFile(filePath, 'utf-8');
    data = JSON.parse(file);
  } catch {
    notFound();
  }
  console.log('filePath', filePath);

  return (
    <main>
      {/* <GuideHero />
			<RichTextSection />
			<CardGrid />
			<FilterChips />
			<FAQ /> */}
      <h1>{data.hero.title}</h1>
      <p>{data.hero.intro}</p>

      <FAQSchema slug={slug} faq={data.faq} />
    </main>
  );
};

export default DestinationsPage;
