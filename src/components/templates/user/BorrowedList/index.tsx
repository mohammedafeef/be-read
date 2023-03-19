import Layout from "@organisms/user/Layout";
import * as S from "./styles";
import {TextInput} from "@atoms/index";
import {BorrowCard} from "@molecules/user/BorrowCard";

export const BorrowedListTemplate = () => {
    return (
        <Layout>
            <S.Root>
                <S.BorrowContainer>
                    <S.FilterWrapper>
                        <S.SearchBar placeholder="Book name"/>
                        <TextInput select label="status" size="small" sx={{minWidth: 100}}/>
                    </S.FilterWrapper>
                    <S.Title>Borrowed Books</S.Title>
                    <S.BorrowedBooksList>
                        <BorrowCard
                            title="Alchemist"
                            author="Paulo Coelho"
                            image="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
                            status="Due soon"
                        />
                        <BorrowCard
                            title="Alchemist"
                            author="Paulo Coelho"
                            image="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
                            status="Due soon"
                        /><BorrowCard
                        title="Alchemist"
                        author="Paulo Coelho"
                        image="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
                        status="Due soon"
                    /><BorrowCard
                        title="Alchemist"
                        author="Paulo Coelho"
                        image="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ="
                        status="Due soon"
                    />
                    </S.BorrowedBooksList>
                </S.BorrowContainer>
                <S.ReaderInfoContainer>
                    <S.Title>Reader Info</S.Title>
                    <S.Count>23</S.Count>
                    <S.CountLabel>Books Read</S.CountLabel>
                    <S.Count>23</S.Count>
                    <S.CountLabel>Books Borrowed</S.CountLabel>
                </S.ReaderInfoContainer>
            </S.Root>
        </Layout>
    )
}