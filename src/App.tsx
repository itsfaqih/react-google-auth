import Landing from 'pages/Landing';
import Home from 'pages/Home';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import UserContext from 'contexts/UserContext';
import React, { useState } from 'react';
import { ProfileObj } from 'types/user';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';

function App() {
  const [user, setUser] = useState<ProfileObj | null>(null);

  const { signIn, loaded } = useGoogleLogin({
    clientId: '',
    isSignedIn: true,
    onSuccess: res => {
      const response = res as GoogleLoginResponse;
      const responseOffline = res as GoogleLoginResponseOffline;

      if (responseOffline.code) {
      } else if (response.profileObj) {
        setUser(response.profileObj);
      }
    },
  });

  if (loaded) {
    signIn();
  }

  return (
    <UserContext.Provider value={user}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
