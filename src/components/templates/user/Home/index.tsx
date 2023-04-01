import Layout from "@organisms/user/Layout";
import * as S from "./styles";
import {BookCard} from "@molecules/user/BookCard";
import {useBooks} from "@templates/user/Home/useBooks";

export const HomeTemplate = () => {
    const {books} = useBooks();
    return (
        <Layout>
            <S.BooksWrapper>
                {
                    books?.map((book, index) => (
                        <BookCard
                            key={index}
                            id={book.id}
                            title={book.name}
                            author={book.author}
                            image={book.image}
                        />
                    ))
                }

            </S.BooksWrapper>
        </Layout>
    )
}