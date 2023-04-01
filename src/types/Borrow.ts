import {Book} from "@app/types/Book";
import {User} from "@app/types/User";

export interface Borrow {
    id: string;
    book: Book;
    student: User;
    issuedDate: number;
    returnDate: number;
    remarks?: string;
}