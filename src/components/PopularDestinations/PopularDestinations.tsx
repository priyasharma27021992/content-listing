import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel';

const PopularDestinations = () => {
	return (
		<section>
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 8 }, (_, index) => (
						<CarouselItem
							key={index}
							className='basis-1/3'>
							<div className='p-10'>index</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};

export { PopularDestinations };
