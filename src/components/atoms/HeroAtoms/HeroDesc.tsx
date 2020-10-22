import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function HeroDesc({ children }: Props) {
  return <p className="text-xl text-gray-600">{children}</p>;
}
