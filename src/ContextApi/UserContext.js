import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePhoneNumber, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider()

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const LogInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const manageProfile = profile => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    
    const manageVerifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const AuthInfo = { user, signIn,manageVerifyEmail, signUp, logOut, LogInWithGoogle, manageProfile, loading }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default UserContext;