'use client';

import { TabContext } from '@/context/TabContext';
import classNames from 'classnames';
import { ReactNode, useContext, useState } from 'react';

interface TabsProps {
  defaultTab: number;
  children: React.ReactElement;
}

const Tabs = ({ defaultTab = 0, children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(defaultTab);
  return (
    <TabContext value={{ selectedTab, setSelectedTab }}>
      <div>{children}</div>
    </TabContext>
  );
};

const TabsList = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-row gap-4 border-b border-gray-400'>
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: number;
  children?: ReactNode;
}

const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const { setSelectedTab, selectedTab } = useContext(TabContext);
  return (
    <button
      onClick={() => setSelectedTab(value)}
      className={classNames(
        'cursor-pointer px-4 py-2 hover:underline',
        value === selectedTab ? 'bg-yellow-200 underline-offset-2' : '',
      )}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: number;
  children?: ReactNode;
}

const TabsContent = ({ value, children }: TabsContentProps) => {
  const { selectedTab } = useContext(TabContext);
  if (selectedTab !== value) return null;
  return <div className='px-4 py-2'>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
