import Image from 'next/image';
import { ReactNode } from 'react';

export interface CardProps {
	image?: { src: string; alt: string };
	title: string;
	subTitle?: string;
	actionComponent?: ReactNode;
}

export const Card = (cardData: CardProps) => {
	const { image, title, subTitle, actionComponent } = cardData;
	return (
		<div className='min-h-100 min-w-50 shadow-md rounded-md'>
			{image && (
				<Image
					src={image.src}
					alt={image.alt}
					height={50}
					width={100}
				/>
			)}
			<h2>{title}</h2>
			<h3>{subTitle}</h3>
			{actionComponent}
		</div>
	);
};
