import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";







export const AUthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logOutUser = () => {
        return signOut(auth);
    }

    // google pop up login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // update user profile
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    // github login
    const githubLogin = () => {
      return  signInWithPopup(auth, githubProvider);
    }





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Observe  current user:', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {

            unSubscribe

        }

    }, [])

    const userInfo = {
        createUser,
        signInUser,
        user,
        logOutUser,
        updateUser,
        loading,
        googleLogin,
        githubLogin

    }
    return (
        <div>
            <AUthContext.Provider value={userInfo}>
                {
                    children
                }
            </AUthContext.Provider>

        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}