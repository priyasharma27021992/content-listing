import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type DestinationData = {
  slug: string;
  meta?: { title?: string; description?: string; canonical?: string };
  hero?: {
    title?: string;
    intro?: string;
    image?: { src: string; alt: string };
  };
  faq?: { question: string; answer: string }[];
  thingsToDo?: any[];
  sections?: any[];
  bestTimeToVisit?: any;
};

export const getDestinationData = cache(
  async (slug: string): Promise<DestinationData> => {
    const filePath = path.join(process.cwd(), 'data', `${slug}.json`);
    const raw = await readFile(filePath, 'utf-8');
    return JSON.parse(raw);
  },
);
