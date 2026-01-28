import { ReactNode } from 'react';
import classnames from 'classnames';

const Carousel = ({ children }) => {
	return (
		<div
			className='relative w-full max-w-48 sm:max-w-xs md:max-w-sm'
			role='region'
			aria-roledescription='carousel'>
			{children}
		</div>
	);
};

const CarouselContent = ({ children }) => {
	return <div className='flex overflow-hidden'>{children}</div>;
};

interface CarouselItemProps {
	children: ReactNode;
	className?: string;
}

const CarouselItem = ({ children, className }: CarouselItemProps) => {
	return (
		<div
			role='group'
			className={classnames('min-w-0 shrink-0 grow-0', className)}>
			{children}
		</div>
	);
};

const CarouselPrevious = () => {
	return <div>&lt;</div>;
};

const CarouselNext = () => {
	return <div>&gt;</div>;
};

export {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
};
