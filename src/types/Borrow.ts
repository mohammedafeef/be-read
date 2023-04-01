import {Book} from "@app/types/Book";
import {User} from "@app/types/User";

export interface Borrow {
    id: string;
    book: Book;
    student: User;
    issuedDate: Date;
    returnDate: Date;
    remarks?: string;
    isReturned: boolean;
}