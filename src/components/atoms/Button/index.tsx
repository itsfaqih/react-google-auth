import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children?: ReactNode;
  variant: VARIANT;
  disabled?: boolean | undefined;
  onClick?: () => void;
}

export enum VARIANT {
  PRIMARY = 'bg-indigo-600 text-white',
  SECONDARY = 'bg-gray-200 text-gray-700',
}

export default function Button({ children, variant, disabled = false, onClick }: Props) {
  const classes = classNames('font-semibold rounded py-2 px-4', variant, {
    'bg-opacity-50': disabled,
  });
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
