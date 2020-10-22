import HomeLayout from 'components/templates/HomeLayout';
import AuthContext from 'contexts/AuthContext';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const user = useContext(AuthContext);
  if (user === null) {
    history.push('/');
  }
  
  return <HomeLayout />;
}
