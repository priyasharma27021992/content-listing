import { DiscoverTabs } from '@/components/DiscoverTabs';
import { HotDeals } from '@/components/HotDeals';
import { ImageHeroGroup } from '@/components/ImageHeroGroup';
import { MainSearch } from '@/components/MainSearch';
import { PopularDestinations } from '@/components/PopularDestinations';

export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-center font-sans dark:bg-black'>
			<main className='flex gap-10 min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start'>
				<MainSearch />
				<HotDeals />
				<DiscoverTabs />
				<PopularDestinations />
				<ImageHeroGroup />
			</main>
		</div>
	);
}
