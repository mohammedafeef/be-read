import Layout from "@organisms/admin/Layout";
import {BooksFilter} from "@organisms/admin/BooksFilter";
import * as S from "./styles";
import {BookCard} from "@molecules/user/BookCard";

export const BooksTemplate = () => {
    return (
        <Layout>
            <BooksFilter/>
            <S.BooksList>
                <BookCard
                    title="The Lord of the Rings"
                    author="J.R.R. Tolkien"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                    status="Available"
                />
                <BookCard
                    title="A Game of Thrones"
                    author="George R. R. Martin"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                    status="Available"
                />
                <BookCard
                    title="Alchemist"
                    author="Paulo Coelho"
                    image="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
                    status="Available"
                />
                <BookCard
                    title="The Lord of the Rings"
                    author="J.R.R. Tolkien"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                    status="Available"
                />
                <BookCard
                    title="A Game of Thrones"
                    author="George R. R. Martin"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                    status="Available"
                />
                <BookCard
                    title="Alchemist"
                    author="Paulo Coelho"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                    status="Available"
                />
                <BookCard
                    title="The Lord of the Rings"
                    author="J.R.R. Tolkien"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                    status="Available"
                />
                <BookCard
                    title="A Game of Thrones"
                    author="George R. R. Martin"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                    status="Available"
                />
            </S.BooksList>
        </Layout>
    )
}