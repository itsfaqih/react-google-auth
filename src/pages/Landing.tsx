import LandingLayout from 'components/templates/LandingLayout';
import AuthContext from 'contexts/AuthContext';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileObj } from 'types/user';

interface Props {
  authenticate: (userData: ProfileObj) => void;
}

export default function Landing({ authenticate }: Props) {
  const history = useHistory();
  const user = useContext(AuthContext);

  if (user !== null) {
    history.push('/home');
  }
  
  return (
    <LandingLayout
      data={{
        hero: {
          text: (
            <>
              Manage <span className="text-indigo-600">ToDo</span> list easier
            </>
          ),
          desc: 'Just your typical to do application',
        },
      }}
      action={{ authenticate }}
    />
  );
}
