import { createContext } from 'react';
import { ProfileObj } from 'types/user';

const UserContext = createContext<ProfileObj | null>(null);

export default UserContext;
