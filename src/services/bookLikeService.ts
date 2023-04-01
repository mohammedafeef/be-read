import {addDoc, collection, deleteDoc, doc, getDocs, query, where} from "@firebase/firestore";
import {db} from "@app/services/firebaseClient";
import {collections} from "@app/constansts/firebaseKeys";

export const likeBook = async (data: any) => {
    return addDoc(collection(db, collections.bookLikes), data);
}

export const getBookLikeByStudentAndBook = async (userId: string, bookId: string) => {
    return getDocs(query(collection(db, collections.bookLikes), where("student.id", "==", userId), where("book.id", "==", bookId)));
}

export const unlikeBook = async (id: string) => {
    return deleteDoc(doc(db, collections.bookLikes, id));

}