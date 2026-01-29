import { DiscoverTabs } from '@/components/DiscoverTabs';
import { HotDeals } from '@/components/HotDeals';
import { ImageHeroGroup } from '@/components/ImageHeroGroup';
import { MainSearch } from '@/components/MainSearch';
import { PopularDestinations } from '@/components/PopularDestinations';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-6xl flex-col items-center justify-between gap-10 px-16 py-32 sm:items-start dark:bg-black'>
        <MainSearch />
        <HotDeals />
        <DiscoverTabs />
        <PopularDestinations />
        <ImageHeroGroup />
      </main>
    </div>
  );
}
