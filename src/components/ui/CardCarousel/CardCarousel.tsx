import { ReactElement } from 'react';

interface CardCarouselProps {
  cards: Array<any>;
  CardComponent: ReactElement;
}

const CardWrapper = ({ children }) => {
  return <div className=''>{children}</div>;
};

export const CardCarousel = ({ cards, CardComponent }: CardCarouselProps) => {
  return (
    <section className='flex gap-2'>
      {cards.map((cardData) => (
        <CardWrapper key={cardData.title}>
          <CardComponent key={cardData.title} data={cardData} />
        </CardWrapper>
      ))}
    </section>
  );
};
