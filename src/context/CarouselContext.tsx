import { createContext, ReactNode } from 'react';

type CarouselContextProps = {
  scrollEl: ReactNode | null;
  setScrollEl: (element: ReactNode | null) => void;
  stepPx: number;
  setStepPx: (stepPx: number) => void;
};

export const CarouselContext = createContext<CarouselContextProps>({
  scrollEl: null,
  setScrollEl: () => {},
  stepPx: 300,
  setStepPx: () => {},
});
