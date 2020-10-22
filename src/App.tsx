import Landing from 'pages/Landing';
import Home from 'pages/Home';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AuthContext from 'contexts/AuthContext';
import React, { useState } from 'react';
import { ProfileObj } from 'types/user';

function App() {
  const [user, setUser] = useState<ProfileObj | null>(null);

  const authenticate = (userData: ProfileObj) => setUser(userData);

  return (
    <AuthContext.Provider value={user}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing authenticate={authenticate} />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
