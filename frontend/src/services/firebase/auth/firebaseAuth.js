import { getAuth } from 'firebase/auth';
import firebaseApp from '../firebase';

/* Authentication Providers Imports */
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseAuth = getAuth(firebaseApp);
const firebaseAuthProvider = {
    google: new GoogleAuthProvider()
};

export { firebaseAuth, firebaseAuthProvider };