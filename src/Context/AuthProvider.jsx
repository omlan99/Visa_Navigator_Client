import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };

    const signInUser = (email, password) => {
      setLoader(true)  
      return signInWithEmailAndPassword(auth, email, password);
    };  
    const googleSignIn = () => {
      setLoader(true)
        return signInWithPopup(auth, googleProvider);
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
          // console.log("User logged in ", loggedUser);
          setUser(loggedUser || null);
          setLoader(false)
          // if(loggedUser?.email) {
          //   const user = {email : loggedUser.email}
          //   axios.post(``)
          // }
        });
        return () =>  unsubscribe();
        
      }, []);
      const updateUser= (updateData) =>{
        setLoader(true)
        return updateProfile(auth.currentUser, updateData)
      }
      const signOutUser = () => {
        setLoader(true)
        return signOut(auth);
      };
      const resetPassword = (email) =>{
        setLoader(true)
        return sendPasswordResetEmail(auth, email)
      }
      
    const authValue = {
        user,
        setUser,
        loader,
        createUser,
        signInUser,
        googleSignIn,
        updateUser,
        signOutUser, 
        resetPassword

    }
    return (
        <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
     );
};

export default AuthProvider;