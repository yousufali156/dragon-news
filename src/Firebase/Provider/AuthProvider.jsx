import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import App from '../../App';


export const AuthContext = createContext();

const auth = getAuth(App);

const AuthProvider = ({ children }) => {

    const createUser= (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const [user, setUser] = useState(null);
    const authData = {
        user,
        setUser,
        createUser
    };

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;