import Layout from "@organisms/admin/Layout";
import {BooksFilter} from "@organisms/admin/BooksFilter";
import * as S from "./styles";
import {BookCard} from "@molecules/user/BookCard";
import {useBooks} from "@templates/admin/Books/useBooks";
import useAdminRouter from "@app/lib/route-manager/admin-routes";

export const BooksTemplate = () => {
    const {values, mutation} = useBooks();
    const router = useAdminRouter();
    return (
        <Layout>
            <S.HeaderWrapper>
                <S.Title>Books List</S.Title>
                <S.CreateBookButton onClick={() => router.book.create().navigate()}>Add Book</S.CreateBookButton>
            </S.HeaderWrapper>
            <BooksFilter options={values.options} mutation={mutation} state={values.states}/>
            <S.BooksList>
                {
                    values?.books?.map((book, index) => (
                        <BookCard
                            key={index}
                            id={book.id}
                            title={book.name}
                            author={book.author}
                            image={book.image}
                            status={book.isAvailable ? "Available" : "In Hand"}
                        />
                    ))
                }
            </S.BooksList>
        </Layout>
    )
}