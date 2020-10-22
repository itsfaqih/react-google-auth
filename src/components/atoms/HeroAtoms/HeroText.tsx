import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function HeroText({ children }: Props) {
  return <h2 className="text-4xl font-bold text-gray-700">{children}</h2>;
}
