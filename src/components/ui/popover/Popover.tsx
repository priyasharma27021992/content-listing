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

const PopoverContent = ({ open, children, className }: ChildrenProps) => {
  if (!open) return null;
  return <div className={className}>{children}</div>;
};

export { Popover, PopoverContent, PopoverTrigger };
