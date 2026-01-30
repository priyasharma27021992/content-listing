import { createContext } from 'react';

export const CarouselContext = createContext({
  scrollEl: null,
  setScrollEle: () => {},
});
