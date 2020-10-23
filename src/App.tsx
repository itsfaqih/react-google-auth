import Landing from 'pages/Landing';
import Home from 'pages/Home';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import UserContext from 'contexts/UserContext';
import React, { useState } from 'react';
import { ProfileObj } from 'types/user';

function App() {
  const [user, setUser] = useState<ProfileObj | null>(null);

  const authenticate = (userData: ProfileObj) => setUser(userData);
  const signOut = () => setUser(null);

  return (
    <UserContext.Provider value={user}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home">
            <Home signOut={signOut}/>
          </Route>
          <Route path="/">
            <Landing authenticate={authenticate} />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
