import {collections} from "@app/constansts/firebaseKeys";
import {db} from "@app/services/firebaseClient";
import { collection, doc, getDoc, getDocs, setDoc} from "@firebase/firestore";

export const createUser = async (id: string, fullname: string, email: string, username: string, phone: string) => {
    return setDoc(doc(db, collections.users, id), {
        fullname,
        email,
        username,
        phone,
        role: "user",
    });
};

export const getUserById = async (id: string) => {
    return getDoc(doc(db, collections.users, id));
}

export const getUsers = async () => {
    return getDocs(collection(db, collections.users));
}

