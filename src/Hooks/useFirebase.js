
import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase();

const useFirebase=()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const [user,setUser]=useState({})

    const signInGoogle=()=>{
       return signInWithPopup(auth, googleProvider);
        

    }

    const logOutGoogle=()=>{
           signOut(auth).then(()=>{
               setUser({})
           })
        }
        
    useEffect(()=>{
   onAuthStateChanged(auth,user=>{
  if(user)
  setUser(user)
   })
    },[])
    return {
        user,
        signInGoogle,
        logOutGoogle,
    }
}
  export default useFirebase;