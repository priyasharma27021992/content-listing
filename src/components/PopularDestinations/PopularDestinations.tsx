import { Card, CardContent, CardDescription, CardMedia } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const PopularDestinations = () => {
  return (
    <section className='w-full'>
      <h2 id='popular-destinations'>Popular Destinations</h2>
      <Carousel aria-labelledby='popular-destinations'>
        <CarouselContent className='gap-4'>
          {Array.from({ length: 8 }, (_, index) => (
            <CarouselItem key={index} className='' index={index} total={8}>
              <Card className='rounded-md shadow-md'>
                <a href='/hotels-zakopane?search=20-922'>
                  <CardContent>
                    <CardMedia
                      media={{
                        src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/92/21/92212_v71.jpeg',
                        alt: 'Zakopane',
                        width: 200,
                        height: 200,
                      }}
                      className='rounded-t-md'
                    />
                    <CardDescription className='m-3'>
                      <h3>Zakopane</h3>
                      <p>
                        <strong>781</strong>&nbsp; Hotels
                      </p>
                      <p>
                        <strong>zl</strong>&nbsp; <strong>669</strong>&nbsp;
                        Avg.
                      </p>
                    </CardDescription>
                  </CardContent>
                </a>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious scrollByCards={2} />
        <CarouselNext scrollByCards={2} />
      </Carousel>
    </section>
  );
};

export { PopularDestinations };
