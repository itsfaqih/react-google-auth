import Hero from 'components/organisms/Hero';
import { Props as HeroMoleculeProps } from 'components/molecules/HeroMolecule';
import Navbar from 'components/organisms/Navbar';
import React from 'react';
import { ProfileObj } from 'types/user';

interface Props {
  data: {
    hero: HeroMoleculeProps;
  };
}

export default function LandingLayout({ data }: Props) {
  const { hero } = data;

  return (
    <>
      <Navbar />
      <Hero text={hero.text} desc={hero.desc} />
    </>
  );
}
