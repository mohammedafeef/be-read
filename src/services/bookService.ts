import {ref, uploadBytes} from "@firebase/storage";
import {db, storage} from "@app/services/firebaseClient";
import {addDoc, collection, doc, getDoc, getDocs, updateDoc,} from "@firebase/firestore";
import {collections} from "@app/constansts/firebaseKeys";
import {BookCreationProps} from "@app/types/BookCreationProps";

export const getAuthors = async () => {
    return getDocs(collection(db, collections.bookAuthors));
}

export const getGenres = async () => {
    return getDocs(collection(db, collections.bookGenres));
}
export const getPublishers = async () => {
    return getDocs(collection(db, collections.bookPublishers));
}
export const getLanguages = async () => {
    return getDocs(collection(db, collections.languages));
}

export const getBooks = async () => {
    return getDocs(collection(db, collections.books));
}

export const getBookById = async (id: string) => {
    return getDoc(doc(db, collections.books, id));
}

export const createBook = async (data: BookCreationProps) => {
    return addDoc(collection(db, collections.books), {...data, isAvailable: true});
}

export const uploadBookImage = async (image: File) => {
    const storageRef = ref(storage, `books/${image.name}`);
    return uploadBytes(storageRef, image);
}

export const updateBookStatus = async (id: string) => {
    return updateDoc(doc(db, collections.books, id), {
        isAvailable: false
    });
}
export const markBookAsAvailable = async (id: string) => {
    return updateDoc(doc(db, collections.books, id), {
        isAvailable: true
    });
}

