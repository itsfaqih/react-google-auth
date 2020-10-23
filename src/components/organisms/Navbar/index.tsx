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
import { ProfileObj } from 'types/user';

interface Props {
  authenticate?: (userData: ProfileObj) => void;
  signOut?: () => void;
}

export default function Navbar({ authenticate, signOut }: Props) {
  const user = useContext(UserContext);
  const history = useHistory();

  function loginRes(res: GoogleLoginResponse | GoogleLoginResponseOffline) {
    const response = res as GoogleLoginResponse;
    const responseOffline = res as GoogleLoginResponseOffline;

    if (response.profileObj) {
      if (authenticate) {
        authenticate(response.profileObj);
        history.push('/home');
      } else {
        console.error("There's no authenticate function!");
      }
    } else if (responseOffline.code) {
      // authenticate(res.code)
    }
  }

  const authResponse = {
    success: loginRes,
    failure: (err: object) => {
      console.error(err);
    },
  };

  const logout = () => {
    if (signOut) {
      signOut();
    }
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
