import { createContext } from 'react';

export const CarouselContext = createContext({
  visibleSide: 0,
  setVisibleSlide: () => {},
});
