import { createContext } from 'react';
import { ProfileObj } from 'types/user';

const AuthContext = createContext<ProfileObj | null>(null);

export default AuthContext;
