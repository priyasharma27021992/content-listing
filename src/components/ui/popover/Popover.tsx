'use client';
import { ReactNode, useEffect } from 'react';

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

const PopoverContent = ({
  open,
  children,
  className,
  ref,
  handleClose,
}: ChildrenProps) => {
  const onBlur = () => {
    console.log('came baby on blur');
  };
  useEffect(() => {
    if (ref.current) {
      console.log('ref.current baby', ref.current);
      ref.current.focus();
    }
  }, [open, ref]);

  if (!open) return null;
  return (
    <div className={className} tabIndex={0} ref={ref} onBlur={onBlur}>
      {children}
    </div>
  );
};

export { Popover, PopoverContent, PopoverTrigger };
