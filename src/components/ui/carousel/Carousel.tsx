'use client';

import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { CarouselContext } from '@/context/CarouselContext';

interface ChildrenProps {
  children: ReactNode;
  className?: string;
}

interface ChildrenOptionalProps {
  children?: ReactNode;
  className?: string;
}

const Carousel = ({ children }: ChildrenProps) => {
  const [scrollEl, setScrollEl] = useState<ReactNode | null>(null);
  const [stepPx, setStepPx] = useState(300);

  return (
    <CarouselContext value={{ scrollEl, setScrollEl, stepPx, setStepPx }}>
      <div
        className='relative w-full max-w-48 sm:max-w-xs md:max-w-sm'
        role='region'
        aria-roledescription='carousel'
      >
        {children}
      </div>
    </CarouselContext>
  );
};

const CarouselContent = ({ children }: ChildrenProps) => {
  const carouselRef = useRef(null);
  const { setScrollEl } = useContext(CarouselContext);

  useEffect(() => {
    if (!carouselRef?.current) return;
    setScrollEl(carouselRef?.current);
  }, []);

  return (
    <div className='flex overflow-x-auto' ref={carouselRef}>
      {children}
    </div>
  );
};

const CarouselItem = ({
  children,
  className,
  cardWidth,
  gap,
}: ChildrenProps) => {
  return (
    <div
      role='group'
      className={classnames('min-w-0 shrink-0 grow-0', className)}
    >
      {children}
    </div>
  );
};

const CarouselPrevious = ({ children }: ChildrenOptionalProps) => {
  const { scrollEl } = useContext(CarouselContext);

  const handleScroll = () => {
    if (!scrollEl) return;
    scrollEl.scrollBy({ left: -300, behavior: 'smooth' });
  };
  return (
    <button className='absolute top-1/2' onClick={handleScroll}>
      {children ?? `<`}
    </button>
  );
};

const CarouselNext = ({ children }: ChildrenOptionalProps) => {
  const { scrollEl } = useContext(CarouselContext);

  const handleScroll = () => {
    if (!scrollEl) return;
    scrollEl?.scrollBy({ left: 300, behavior: 'smooth' });
  };
  return (
    <button className='absolute top-1/2 right-0' onClick={handleScroll}>
      {children ?? `>`}
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
