import { ReactNode, useContext, useRef, useState } from 'react';
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
  const [visibleSlide, setVisibleSlide] = useState(0);

  return (
    <CarouselContext value={{ visibleSlide, setVisibleSlide }}>
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
  const { setVisibleSlide } = useContext(CarouselContext);
  const handleScroll = () => {
    if (!carouselRef.current) return;
    let { width } = carouselRef.current?.getBoundingClientRect();
    let { scrollLeft } = carouselRef.current;
    setVisibleSlide(Math.round(scrollLeft / width));
  };

  return (
    <div
      className='flex overflow-hidden'
      onScroll={handleScroll}
      ref={carouselRef}
    >
      {children}
    </div>
  );
};

const CarouselItem = ({ children, className }: ChildrenProps) => {
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
  return <div className='absolute top-1/2'>{children ?? `<`}</div>;
};

const CarouselNext = ({ children }: ChildrenOptionalProps) => {
  return <div className='absolute top-1/2 right-0'>{children ?? `>`}</div>;
};

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
