import HomeLayout from 'components/templates/HomeLayout';
import UserContext from 'contexts/UserContext';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const user = useContext(UserContext);
  if (user === null) {
    history.push('/');
  }
  
  return <HomeLayout />;
}
