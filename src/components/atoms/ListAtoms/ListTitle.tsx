import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ListTitle({ children }: Props) {
  return <h3 className="text-xl font-semibold text-gray-600">{children}</h3>;
}
