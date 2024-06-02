import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import auth from "../../Firebase/firebase.config";
export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const allInfo = {
    createUser,
    signIn,
    googleSignIn,
  };
  return (
    <authContext.Provider value={allInfo}>{children}</authContext.Provider>
  );
}
