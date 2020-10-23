import LandingLayout from 'components/templates/LandingLayout';
import UserContext from 'contexts/UserContext';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function Landing() {
  const history = useHistory();
  const user = useContext(UserContext);

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
    />
  );
}
