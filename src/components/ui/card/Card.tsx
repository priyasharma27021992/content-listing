import { ReactNode } from 'react';
import classnames from 'classnames';
interface ChildrenProps {
  children?: ReactNode;
  className?: string;
}

const Card = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

const CardHeader = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

const CardTitle = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

const CardDescription = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

const CardAction = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

const CardContent = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

const CardFooter = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
};
