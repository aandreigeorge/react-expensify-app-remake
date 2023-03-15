import { googleAuth, googleProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";


const startLogin = () => {
    return () => {
        return signInWithPopup(googleAuth, googleProvider)
    };
};

export default startLogin;