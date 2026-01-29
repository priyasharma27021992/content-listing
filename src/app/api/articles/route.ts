import { NextResponse } from 'next/server';

const ARTICLES = [
  { id: 1, title: 'Best places to visit in Paris', country: 'fr' },
  { id: 2, title: 'Amsterdam travel guide', country: 'nl' },
  { id: 3, title: 'Hidden gems of Poland', country: 'pl' },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get('country');

  const filtered = country
    ? ARTICLES.filter((a) => a.country === country)
    : ARTICLES;

  await new Promise((res) => setTimeout(res, 100));

  return NextResponse.json({
    articles: filtered,
    generatedAt: new Date().toISOString(),
  });
}
