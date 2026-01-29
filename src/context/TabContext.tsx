import { createContext } from 'react';

export const TabContext = createContext({
  selectedTab: '',
  setSelectedTab: () => {},
});
