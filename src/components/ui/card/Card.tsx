import { ReactNode } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
interface ChildrenProps {
  children?: ReactNode;
  className?: string;
}

const Card = ({ children, className }: ChildrenProps) => {
  return <div className={classnames('', className)}>{children}</div>;
};

interface CardMediaProps{
  media: {
    src: string,
    alt: string,
    width: number,
    height: number
  },
  className?: string
}

const CardMedia = ({ media, className}: CardMediaProps) => {
  return <Image src={media.src} alt={media.alt} width={media.width} height={media.height} className={className}/>
}

const CardTitle = ({ children, className }: ChildrenProps) => {
  return <h3 className={classnames('', className)}>{children}</h3>;
};

const CardDescription = ({ children, className }: ChildrenProps) => {
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
  CardMedia,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
