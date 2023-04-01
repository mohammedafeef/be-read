import {useQuery} from "react-query";
import {getBooks} from "@app/services/bookService";
import {Book} from "@app/types/Book";

export const useBooks = () => {

    const {data} = useQuery({
        queryKey: ['books'],
        async queryFn(): Promise<Book[]> {
            const books = await getBooks();
            const bookList: Book[] = [];
            books.forEach((doc: any) => {
                bookList.push({
                    id: doc.id,
                    ...doc.data()
                } as Book)
            });
            return bookList;
        }
    });


    return {
        books: data
    }
}