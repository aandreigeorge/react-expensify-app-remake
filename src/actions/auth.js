import { googleAuth, googleProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";


export const startLogin = () => {
    return () => {
        return signInWithPopup(googleAuth, googleProvider)
    };
};

export const startLogout = () => {
    return () => {
        return googleAuth.signOut();
    };
};



