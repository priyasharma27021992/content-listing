'use client';
import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Popover.module.css';

interface ChildrenProps {
  children: ReactNode;
  className?: string;
}

const Popover = ({ children, className }: ChildrenProps) => {
  return <div className={className}>{children}</div>;
};

const PopoverTrigger = ({ children, className }: ChildrenProps) => {
  const onClick = () => {
    const pop = document.getElementById('popover-content');
    pop?.togglePopover();
  };

  return (
    <button
      className={classNames(styles.popoverTrigger, className)}
      onClick={onClick}
      popoverTarget='popover-content'
    >
      {children}
    </button>
  );
};

const PopoverContent = ({ children, className }: ChildrenProps) => {
  const onBlur = () => {
    const pop = document.getElementById('popover-content');
    pop?.hidePopover();
    console.log('came baby on blur');
  };

  return (
    <div
      className={classNames(styles.popoverContent, className)}
      onBlur={onBlur}
      id='popover-content'
      popover='auto'
    >
      {children}
    </div>
  );
};

export { Popover, PopoverContent, PopoverTrigger };
