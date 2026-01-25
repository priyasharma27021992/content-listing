import { CardCarousel } from '../ui/CardCarousel';

import cardData from '../../app/api/__mocks__/cardData.json';
import Image from 'next/image';

const CardComponent = ({ data }) => {
	const { image, title, subTitle, price, currency, cta } = data;

	return (
		<div className='flex flex-col gap-4 min-h-100 min-w-50 shadow-md rounded-md'>
			<div className='flex flex-col gap-2'>
				{image && (
					<Image
						src={image.src}
						alt={image.alt}
						height={50}
						width={200}
					/>
				)}
				<h2>{title}</h2>
				<h3>{subTitle}</h3>
			</div>
			<div data-testid='price-block'>
				<div>
					{price}
					{currency}
				</div>
				{cta && <button>{cta.title}</button>}
			</div>
		</div>
	);
};

const HotDeals = () => {
	const deals = cardData.cards;

	return (
		<section>
			<h2>Hot deals in Zakopane</h2>
			<CardCarousel
				cards={deals}
				CardComponent={CardComponent}
			/>
		</section>
	);
};

export { HotDeals };
