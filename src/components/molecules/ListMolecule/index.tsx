import ListAtoms from 'components/atoms/ListAtoms';
import React, { ReactNode } from 'react';

interface Props {
  title: ReactNode;
  items: ReactNode[];
}

export default function ListMolecule({ title, items }: Props) {
  return (
    <div>
      <ListAtoms.Title>{title}</ListAtoms.Title>
      <ListAtoms.Container>
        {items.map((item, index) => (
          <ListAtoms.Item key={index}>{item}</ListAtoms.Item>
        ))}
      </ListAtoms.Container>
    </div>
  );
}
