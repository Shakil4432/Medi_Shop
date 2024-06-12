import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import { BounceLoader } from "react-spinners";
export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);
  const allInfo = {
    user,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };
  return (
    <authContext.Provider value={allInfo}>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <BounceLoader
            loading={loading}
            color="#16A085"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        children
      )}
    </authContext.Provider>
  );
}
