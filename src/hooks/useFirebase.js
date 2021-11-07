import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase-init";

initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState(null);
  const auth = getAuth();

  //sign up using email
  const signUpUsingEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    // .then(result => {
    //   setUser(result.user);
    // })

  }

  //sign in using email
  const signInUsingEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    // .then(result => {
    //   setUser(result.user);
    // })
  }

  //sign in using google
  const signInUsingGoogle = () => {
    const Provider = new GoogleAuthProvider()
    return signInWithPopup(auth, Provider)
    // .then(result => {
    //   setUser(result.user);
    // })
  }

  //sign out
  const signingOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])


  return {
    user,
    signUpUsingEmail,
    signInUsingEmail,
    signInUsingGoogle,
    signingOut
  }

};

export default useFirebase;