import cardData from '../../app/api/__mocks__/cardData.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent, CardFooter, CardMedia } from '../ui/card';
import { Button } from '../ui';

const HotDeals = () => {
  return (
    <section>
      <h2>Hot deals in Zakopane</h2>
      <Carousel>
        <CarouselContent className='gap-4'>
          {cardData.cards.map((itemData) => (
            <CarouselItem
              key={itemData.title}
              index={0}
              total={cardData.cards.length}
              className='border'
            >
              <Card className='flex flex-col'>
                <CardMedia
                  media={{ ...itemData.image, width: 200, height: 100 }}
                />
                <CardContent className='m-1'>{itemData.title}</CardContent>
                <CardFooter className='m-2 rounded-lg border p-2'>
                  <p>
                    <span>{itemData.currency} &nbsp;</span>
                    <span>{itemData.price}</span>
                  </p>
                  <Button>Check Deal</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export { HotDeals };
