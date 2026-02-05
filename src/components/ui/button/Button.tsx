'use client';

import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  clssName?: string;
}
export const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-200',
        className,
      )}
      {...rest}
    ></button>
  );
};
