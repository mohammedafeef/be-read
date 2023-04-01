import {addDoc, collection, getDocs, query, where} from "@firebase/firestore";
import {db} from "@app/services/firebaseClient";
import {collections} from "@app/constansts/firebaseKeys";

//TO-DO: add type specification
export const createNewRequest = async (data: any) => {
    return addDoc(collection(db, collections.bookRequests), {...data});
}

export const getIssuedBooks = async () => {
    return getDocs(collection(db, collections.bookRequests));
}

export const getIssuedBooksByUserId = async (userId: string) => {
    return getDocs(query(collection(db, collections.bookRequests), where("student.id", "==", userId)));
}