import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
       //sign in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
     //google Login
     const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
        //github sign in
        const githubLogin = () => {
          setLoading(true);
          return signInWithPopup(auth, GithubProvider);
        };
    const authInfo ={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;