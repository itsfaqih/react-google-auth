import HeroAtoms from 'components/atoms/HeroAtoms';
import React, { ReactNode } from 'react';

export interface Props {
  text: ReactNode;
  desc: ReactNode;
}

export default function HeroMolecule({ text, desc }: Props) {
  return (
    <div className="flex flex-col items-center">
      <HeroAtoms.Text>{text}</HeroAtoms.Text>
      <div className="mt-4">
        <HeroAtoms.Desc>{desc}</HeroAtoms.Desc>
      </div>
    </div>
  );
}
