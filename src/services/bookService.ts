import {uploadBytes} from "@firebase/storage";
import {db, storage} from "@app/services/firebaseClient";
import {addDoc, collection, doc, getDoc} from "@firebase/firestore";
import {collections} from "@app/constansts/firebaseKeys";
import {BookCreationProps} from "@app/types/BookCreationProps";

export const getAuthors = async () => {
    return getDoc(doc(db, collections.bookAuthors));
}

export const getGenres = async () => {
    return getDoc(doc(db, collections.bookGenres));
}
export const getPublishers = async () => {
    return getDoc(doc(db, collections.bookPublishers));
}
export const getLanguages = async () => {
    return getDoc(doc(db, collections.languages));
}

export const getBooks = async () => {
    return getDoc(doc(db, collections.books));
}

export const getBookById = async (id: string) => {
    return getDoc(doc(db, collections.books, id));
}

export const createBook = async (data: BookCreationProps) => {
    return addDoc(collection(db, collections.books), data);
}

export const uploadBookImage = async (image: File) => {
    return uploadBytes(storage, image);
}