import { createContext } from 'react';

const GoogleAuthContext = createContext<gapi.auth2.GoogleAuth | null>(null);

export default GoogleAuthContext;
