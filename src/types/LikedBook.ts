import {User} from "@app/types/User";
import {Book} from "@app/types/Book";

export interface LikedBook {
    id: string;
    book: Book;
    student: User;
}