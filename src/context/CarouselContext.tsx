import { createContext } from 'react';

type CarouselContextProps = {
  scrollEl: HTMLDivElement | null;
  setScrollEl: (element: HTMLDivElement | null) => void;
  stepPx: number;
  setStepPx: (stepPx: number) => void;
};

export const CarouselContext = createContext<CarouselContextProps>({
  scrollEl: null,
  setScrollEl: () => {},
  stepPx: 300,
  setStepPx: () => {},
});
