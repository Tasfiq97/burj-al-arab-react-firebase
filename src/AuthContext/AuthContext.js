import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


 export const authFull =createContext();

const AuthContext = ({children}) => {
    const fullContext= useFirebase();
    return (
        <authFull.Provider value={fullContext}>
                {children}
        </authFull.Provider>
    );
};

export default AuthContext;