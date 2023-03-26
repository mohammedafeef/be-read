import {auth} from "@app/services/firebaseClient";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";

export const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}