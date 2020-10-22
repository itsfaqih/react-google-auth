import HeroMolecule, { Props } from 'components/molecules/HeroMolecule';
import React from 'react';

export default function Hero({ text, desc }: Props) {
  return (
    <div className="max-w-6xl pt-16 pb-8 mx-auto">
      <HeroMolecule text={text} desc={desc} />
    </div>
  );
}
