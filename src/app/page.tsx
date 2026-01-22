import {MainSearch} from "@/components/MainSearch";

export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-centerfont-sans dark:bg-black'>
			<main className='flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start'>
				<MainSearch />
			</main>
		</div>
	);
}
