import Layout from "@organisms/admin/Layout";
import * as S from "./styles";
import {BorrowCard} from "@molecules/admin/BorrowCard";
import {BorrowFilter} from "@organisms/admin/BorrowFilter";
import {useBorrow} from "@templates/admin/BorrowedList/useBorrow";

export const BorrowedListTemplate = () => {
    const {values, mutation} = useBorrow();
    return (
        <Layout>
            <S.HeaderWrapper>
                <S.Title>Borrowed Books</S.Title>
                <S.createBorrowButton>Issue Book</S.createBorrowButton>
            </S.HeaderWrapper>
            <S.Root>
                <S.BorrowContainer>
                    <BorrowFilter key="filter" state={values.states} mutation={mutation}/>
                    <S.BorrowedBooksList>
                        {
                            values?.issuedBooks?.map((borrow, index) => (
                                <BorrowCard
                                    key={index}
                                    title={borrow.book.name}
                                    author={borrow.book.author}
                                    image={borrow.book.image}
                                    status="Due soon"
                                />
                            ))
                        }
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