import Brand from 'components/atoms/Brand';
import Button, { VARIANT } from 'components/atoms/Button';
import GoogleAuthContext from 'contexts/GoogleAuthContext';
import UserContext from 'contexts/UserContext';
import React, { useContext, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const user = useContext(UserContext);
  const googleAuth = useContext(GoogleAuthContext);
  const history = useHistory();

  useLayoutEffect(() => {
    if (user === null) {
      googleAuth?.attachClickHandler('sign-in', {}, googleUser => {}, console.error);
    }
  }, [googleAuth, history, user]);

  const logout = () => {
    googleAuth?.signOut();
  }

  return (
    <nav className="bg-white">
      <div className="max-w-6xl py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Brand href="#" />
          {user === null ? (
            <div id="sign-in">
              <Button variant={VARIANT.PRIMARY}>Sign in</Button>
            </div>
          ) : (
            <div id="sign-out">
              <Button variant={VARIANT.SECONDARY} onClick={logout}>Sign out</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
