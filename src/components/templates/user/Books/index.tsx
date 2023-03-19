import Layout from "@organisms/user/Layout";
import * as S from "./styles";
import {Button, TextInput} from "@atoms/index";
import {BookListCard} from "@molecules/user/BooksListCard";

export default function BooksTemplate() {
    return (
        <Layout>
            <S.Root>
                <S.FilterWrapper>
                    <S.FilterTitle>Filters</S.FilterTitle>
                    <TextInput
                        label="Select Author"
                        select
                    />
                    <TextInput
                        label="Select Genre"
                        select
                    />
                    <TextInput
                        label="Select Language"
                        select
                    />
                    <TextInput
                        label="Select Publisher"
                        select
                    />
                    <Button>Apply</Button>
                </S.FilterWrapper>
                <S.ContentWrapper>
                    <S.ContentTitle>Filtered Books</S.ContentTitle>
                    <S.BooksWrapper>
                        <BookListCard
                            title="The Lord of the Rings"
                            author="J.R.R. Tolkien"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                            status="Available"
                        />
                        <BookListCard
                            title="A Game of Thrones"
                            author="George R. R. Martin"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                            status="Available"
                        />
                        <BookListCard
                            title="Alchemist"
                            author="Paulo Coelho"
                            image="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
                            status="Available"
                        />
                        <BookListCard
                            title="The Lord of the Rings"
                            author="J.R.R. Tolkien"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                            status="Available"
                        />
                        <BookListCard
                            title="A Game of Thrones"
                            author="George R. R. Martin"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                            status="Available"
                        />
                        <BookListCard
                            title="Alchemist"
                            author="Paulo Coelho"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                            status="Available"
                        />
                        <BookListCard
                            title="The Lord of the Rings"
                            author="J.R.R. Tolkien"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                            status="Available"
                        />
                        <BookListCard
                            title="A Game of Thrones"
                            author="George R. R. Martin"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zt3QZQFJL._SX331_BO1,204,203,200_.jpg"
                            status="Available"
                        />
                    </S.BooksWrapper>
                </S.ContentWrapper>
            </S.Root>
        </Layout>
    )
}