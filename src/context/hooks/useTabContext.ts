import { useContext } from 'react';
import { TabContext } from '../TabContext';

export const useTabContext = () => {
  const context = useContext(TabContext);

  if (!context) throw new Error('use useTabContext inside TabContext provider');

  return context;
};
