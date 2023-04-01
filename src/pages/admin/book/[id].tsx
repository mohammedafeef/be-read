import BookDetailsTemplate from "@templates/admin/BookDetails";
import {GetServerSideProps} from "next";
import {getBookById} from "@app/services/bookService";
import {BookDeatailsPageProps} from "@app/types/BookDeatailsPageProps";

export default function BookDetails(props: BookDeatailsPageProps) {
    return (
        <BookDetailsTemplate {...props}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const bookId = context.query.id;
    const book = await getBookById(bookId as string);
    return {
        props: {
            id: book.id,
            ...book.data(),
        }
    }
}