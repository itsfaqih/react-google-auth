import Brand from 'components/atoms/Brand';
import Button, { VARIANT } from 'components/atoms/Button';
import UserContext from 'contexts/UserContext';
import React, { useContext } from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const user = useContext(UserContext);
  const history = useHistory();

  function loginRes(res: GoogleLoginResponse | GoogleLoginResponseOffline) {
    const response = res as GoogleLoginResponse;
    const responseOffline = res as GoogleLoginResponseOffline;

    if (response.profileObj) {
      history.push('/home');
    } else if (responseOffline.code) {
    }
  }

  const authResponse = {
    success: loginRes,
    failure: (err: object) => {
      console.error(err);
    },
  };

  const logout = () => {
    history.push('/');
  };

  return (
    <nav className="bg-white">
      <div className="max-w-6xl py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Brand href="#" />
          {user !== null ? (
            <GoogleLogout
              clientId="671070534468-qhp2q27a8oavg3lf45hl1dc06koppvl7.apps.googleusercontent.com"
              render={renderProps => (
                <Button
                  variant={VARIANT.SECONDARY}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Log out
                </Button>
              )}
              onLogoutSuccess={logout}
            />
          ) : (
            <GoogleLogin
              clientId="671070534468-qhp2q27a8oavg3lf45hl1dc06koppvl7.apps.googleusercontent.com"
              render={renderProps => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant={VARIANT.PRIMARY}
                >
                  Sign in
                </Button>
              )}
              onSuccess={authResponse.success}
              onFailure={authResponse.failure}
              cookiePolicy={'single_host_origin'}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
