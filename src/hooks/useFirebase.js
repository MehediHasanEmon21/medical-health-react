
import initializeAuthentication from "../config/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();

const useFireBase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //login with google
    const signInGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => console.log(error.message))
        .finally(() => setIsLoading(false));

    }

    //sign un email

    const signInEmail = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            alert(error.message)
        });

    }

    //register with email
    const registerInEmail = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            alert(error.message)
        });

    }
   

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({})
        }
        setIsLoading(false);
    });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
         .then(() => setUser({}))
         .finally(() => setIsLoading(false));
            
    }


    return {
        user,
        signInGoogle,
        logOut,
        setUser,
        registerInEmail,
        signInEmail,
        isLoading
    }

}

export default useFireBase;