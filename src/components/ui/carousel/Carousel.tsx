'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { CarouselContext } from '@/context/CarouselContext';
import { useCarouselContext } from '@/context/hooks';
import Image from 'next/image';

interface ChildrenProps {
  children: ReactNode;
  className?: string;
}

const Carousel = ({ children }: ChildrenProps) => {
  const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState(300);

  return (
    <CarouselContext value={{ scrollEl, setScrollEl, stepPx, setStepPx }}>
      <div
        className='relative w-full max-w-48 sm:max-w-xs md:max-w-sm lg:max-w-6xl'
        role='region'
        aria-roledescription='carousel'
      >
        {children}
      </div>
    </CarouselContext>
  );
};

const CarouselContent = ({ children, className }: ChildrenProps) => {
  const carouselRef = useRef(null);
  const { setScrollEl } = useCarouselContext();

  useEffect(() => {
    if (!carouselRef?.current) return;
    setScrollEl(carouselRef?.current);
  }, [setScrollEl]);

  return (
    <div
      className={classnames('flex overflow-x-auto', className)}
      ref={carouselRef}
    >
      {children}
    </div>
  );
};

interface CarouselItemProps extends ChildrenProps {
  index: number;
  total: number;
}

const CarouselItem = ({
  children,
  className,
  index,
  total,
}: CarouselItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const { setStepPx } = useCarouselContext();

  useEffect(() => {
    if (!itemRef.current) return;
    setStepPx(itemRef.current.offsetWidth);
  }, [setStepPx]);

  return (
    <div
      className={classnames('min-w-0 shrink-0 grow-0', className)}
      aria-label={`Card ${index} of ${total}`}
      ref={itemRef}
    >
      {children}
    </div>
  );
};

interface CarouselIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scrollByCards?: number;
  children?: ReactNode;
  className?: string;
}

const CarouselPrevious = ({
  children,
  scrollByCards = 2,
  ...rest
}: CarouselIconProps) => {
  const { scrollEl, stepPx } = useCarouselContext();

  const handleScroll = () => {
    if (!scrollEl) return;
    scrollEl.scrollBy({ left: -stepPx * scrollByCards, behavior: 'smooth' });
  };
  return (
    <button
      className='absolute bottom-1/2 cursor-pointer'
      onClick={handleScroll}
      aria-label='Previous Slide'
      {...rest}
    >
      {children ?? (
        <Image
          src='/images/icons/left-arrow.svg'
          alt='Left arrow Image'
          width={40}
          height={40}
        />
      )}
    </button>
  );
};

const CarouselNext = ({ children, scrollByCards = 2 }: CarouselIconProps) => {
  const { scrollEl, stepPx } = useCarouselContext();

  const handleScroll = () => {
    if (!scrollEl) return;
    scrollEl?.scrollBy({ left: stepPx * scrollByCards, behavior: 'smooth' });
  };
  return (
    <button
      className='absolute right-0 bottom-1/2 cursor-pointer'
      onClick={handleScroll}
      aria-label='Next Slide'
    >
      {children ?? (
        <Image
          src='/images/icons/right-arrow.svg'
          alt='Right arrow Image'
          width={40}
          height={40}
        />
      )}
    </button>
  );
};

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
