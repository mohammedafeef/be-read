import Layout from "@organisms/admin/Layout";
import * as S from "./styles";
import {BorrowCard} from "@molecules/admin/BorrowCard";
import {BorrowFilter} from "@organisms/admin/BorrowFilter";
import {useBorrow} from "@templates/admin/BorrowedList/useBorrow";
import useAdminRouter from "@app/lib/route-manager/admin-routes";

export const BorrowedListTemplate = () => {
    const {values, mutation} = useBorrow();
    const router = useAdminRouter();
    return (
        <Layout>
            <S.HeaderWrapper>
                <S.Title>Borrowed Books</S.Title>
                <S.createBorrowButton onClick={() => router.book.issueBook().navigate()}>Issue
                    Book</S.createBorrowButton>
            </S.HeaderWrapper>
            <S.Root>
                <S.BorrowContainer>
                    <BorrowFilter key="filter" state={values.states} mutation={mutation}/>
                    {
                        values?.issuedBooks?.length === 0 ? (
                            <S.EmptyList>
                                No requests found
                            </S.EmptyList>
                        ) : (
                            <S.BorrowedBooksList>
                                {
                                    values?.issuedBooks?.map((borrow, index) => (
                                        <BorrowCard
                                            key={index}
                                            id={borrow.id}
                                            bookId={borrow.book.id}
                                            title={borrow.book.name}
                                            author={borrow.book.author}
                                            studentName={borrow.student.fullname}
                                            image={borrow.book.image}
                                            returnDate={borrow.returnDate}
                                            issuedDate={borrow.issuedDate}
                                            isReturned={borrow.isReturned}
                                            refetch={mutation.refetch}
                                        />
                                    ))
                                }
                            </S.BorrowedBooksList>
                        )
                    }
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