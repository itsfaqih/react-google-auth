import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ListContainer({ children }: Props) {
  return <ul className="px-4 py-4 overflow-hidden bg-white rounded shadow">{children}</ul>;
}
