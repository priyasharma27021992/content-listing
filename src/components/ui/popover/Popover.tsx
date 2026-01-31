import { ReactNode } from 'react';

interface ChildrenProps {
  children: ReactNode;
  className?: string;
}

const Popover = ({ children, className }: ChildrenProps) => {
  return <div className={className}>{children}</div>;
};

const PopoverTrigger = ({ children, className }: ChildrenProps) => {
  return <div className={className}>{children}</div>;
};

const PopoverContent = ({ children, className }: ChildrenProps) => {
  return <div className={className}>{children}</div>;
};

export { Popover, PopoverContent, PopoverTrigger };
