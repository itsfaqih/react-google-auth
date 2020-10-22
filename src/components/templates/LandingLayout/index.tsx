import Hero from 'components/organisms/Hero';
import { Props as HeroMoleculeProps } from 'components/molecules/HeroMolecule';
import Navbar from 'components/organisms/Navbar';
import React from 'react';
import { ProfileObj } from 'types/user';

interface Props {
  data: {
    hero: HeroMoleculeProps;
  };
  action: {
    authenticate: (userData: ProfileObj) => void;
  }
}

export default function LandingLayout({ data, action }: Props) {
  const { hero } = data;
  const { authenticate } = action;

  return (
    <>
      <Navbar authenticate={authenticate}/>
      <Hero text={hero.text} desc={hero.desc} />
    </>
  );
}
