import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const useFirebase = () => {
  const auth = getAuth();

  //sign up using email
  const signUpUsingEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

  }

  //sign in using email
  const signInUsingEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //sign in using google
  const signInUsingGoogle = () => {
    const Provider = new GoogleAuthProvider()
    return signInWithPopup(auth, Provider)
  }

  //sign out
  const signingOut = () => {
    signOut(auth)
      .then(result => { })
  }

  return {
    signUpUsingEmail,
    signInUsingEmail,
    signInUsingGoogle,
    signingOut
  }

};

export default useFirebase;