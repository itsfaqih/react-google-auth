import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ListItem({ children }: Props) {
  return <li className="flex-1 px-3 py-3">{children}</li>;
}
