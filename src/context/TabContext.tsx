import { createContext } from 'react';

export const TabContext = createContext({
  selectedTab: 0,
  setSelectedTab: (value: number) => {},
});
