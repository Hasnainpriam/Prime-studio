import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import auth from '../firebase.init';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = (googleProvider) =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth, email);
    } 

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, loading, createUser,resetPassword, signIn, logOut, signInWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;

