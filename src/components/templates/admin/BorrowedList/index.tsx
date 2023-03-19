import Layout from "@organisms/admin/Layout";
import * as S from "./styles";
import {BorrowCard} from "@molecules/admin/BorrowCard";
import {BorrowFilter} from "@organisms/admin/BorrowFilter";

export const BorrowedListTemplate = () => {
    return (
        <Layout>
            <S.HeaderWrapper>
                <S.Title>Borrowed Books</S.Title>
                <S.createBorrowButton>Issue Book</S.createBorrowButton>
            </S.HeaderWrapper>
            <S.Root>
                <S.BorrowContainer>
                    <BorrowFilter/>
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
                    <S.Title>Borrow Info</S.Title>
                    <S.Count>10</S.Count>
                    <S.CountLabel>Due</S.CountLabel>
                    <S.Count>30</S.Count>
                    <S.CountLabel>In Hand</S.CountLabel>
                </S.ReaderInfoContainer>
            </S.Root>
        </Layout>
    )
}