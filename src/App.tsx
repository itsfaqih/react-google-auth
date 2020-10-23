import Landing from 'pages/Landing';
import Home from 'pages/Home';
import { Switch, BrowserRouter as Router, Route, Redirect, useHistory } from 'react-router-dom';
import UserContext from 'contexts/UserContext';
import React, { useEffect, useMemo, useState } from 'react';
import { ProfileObj } from 'types/user';
import GoogleAuthContext from 'contexts/GoogleAuthContext';

function App() {
  const [user, setUser] = useState<ProfileObj | null>(null);
  const [loadedAuth2, setLoadedAuth2] = useState(false);

  const auth2 = useMemo<gapi.auth2.GoogleAuth | null>(() => {
    if (loadedAuth2) {
      return gapi.auth2.init({
        client_id: '671070534468-qhp2q27a8oavg3lf45hl1dc06koppvl7.apps.googleusercontent.com',
      });
    }
    return null;
  }, [loadedAuth2]);

  useEffect(() => {
    gapi.load('auth2', () => {
      setLoadedAuth2(true);
    });
  }, []);

  useEffect(() => {
    if (auth2 !== null) {
      auth2.currentUser.listen(googleUser => {
        if (googleUser.isSignedIn()) {
          const profile = googleUser.getBasicProfile();
          setUser({
            email: profile.getEmail(),
            name: profile.getName(),
          });
        } else {
          setUser(null);
        }
      });
    }
  }, [auth2]);

  return (
    <GoogleAuthContext.Provider value={auth2}>
      <UserContext.Provider value={user}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route render={() => (user !== null ? <Home /> : <Redirect to="/" />)} path="/home" />
            <Route
              render={() => (user === null ? <Landing /> : <Redirect to="/home" />)}
              path="/"
            />
          </Switch>
        </Router>
      </UserContext.Provider>
    </GoogleAuthContext.Provider>
  );
}

export default App;
