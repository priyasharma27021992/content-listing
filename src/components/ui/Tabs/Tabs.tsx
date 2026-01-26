'use client';

import { TabContext } from '@/context/TabContext';
import { ReactNode, useContext, useState } from 'react';

const Tabs = ({ children }: { children: ReactNode }) => {
	const [selectedTab, setSelectedTab] = useState('');
	return (
		<TabContext value={{ selectedTab, setSelectedTab }}>
			<div>{children}</div>
		</TabContext>
	);
};

const TabsList = ({ children }: { children: ReactNode }) => {
	return (
		<div className='border-b border-gray-400 flex flex-row gap-4 px-4 py-2'>
			{children}
		</div>
	);
};

const TabsTrigger = ({ value, children }) => {
	const { setSelectedTab } = useContext(TabContext);
	return <button onClick={() => setSelectedTab(value)}>{children}</button>;
};

const TabsContent = ({ value, children }) => {
	const { selectedTab } = useContext(TabContext);
	if (selectedTab !== value) return null;
	return <div className='px-4 py-2'>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
