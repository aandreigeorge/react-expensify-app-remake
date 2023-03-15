import { googleAuth, googleProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";


const startLogin = () => {
    return () => {
        return signInWithPopup(googleAuth, googleProvider)
    };
};

const startLogout = () => {
    return () => {
        return googleAuth.signOut();
    };
};

export { startLogin, startLogout };

