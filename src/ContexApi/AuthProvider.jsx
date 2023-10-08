import React, { createContext, useState } from 'react';
import auth from './../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from 'react';


export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const LogIn = (email, password) => {
        setLoading(true);
      return  signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    const GoogleAccount = () => 
    {
        return signInWithPopup(auth, GoogleProvider);
    }

     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
          })
          return () => {
            unsubscribed();
          }
     }, [])

    const authInfo = {
        user,
        createUser,
        LogIn,
        LogOut,
        loading,
        GoogleAccount

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;