import {auth} from "@app/services/firebaseClient";

export const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
}
export const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
}