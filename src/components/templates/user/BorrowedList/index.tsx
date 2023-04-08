import Layout from "@organisms/user/Layout";
import * as S from "./styles";
import {BorrowCard} from "@molecules/user/BorrowCard";
import {useBorrow} from "@templates/user/BorrowedList/useBorrow";

export const BorrowedListTemplate = () => {
    const {values, mutation} = useBorrow();
    return (
        <Layout>
            <S.Root>
                <S.BorrowContainer>
                    <S.FilterWrapper>
                        <S.SearchBar placeholder="Book name" value={values.states.keyword}
                                     onChange={mutation.handleKeywordChange}/>
                        {/*<TextInput select label="status" size="small" sx={{minWidth: 100}}/>*/}
                    </S.FilterWrapper>
                    <S.Title>Borrowed Books</S.Title>
                    {
                        values?.issuedBooks?.length === 0 ? (<S.EmptyList>
                            No requests found
                        </S.EmptyList>) : (


                            <S.BorrowedBooksList>
                                {
                                    values?.issuedBooks?.map((borrow, index) => (
                                        <BorrowCard
                                            key={index}
                                            title={borrow.book.name}
                                            author={borrow.book.author}
                                            image={borrow.book.image}
                                            returnDate={borrow.returnDate}
                                            issuedDate={borrow.issuedDate}
                                            isReturned={borrow.isReturned}
                                        />
                                    ))
                                }
                            </S.BorrowedBooksList>
                        )
                    }
                </S.BorrowContainer>
                <S.ReaderInfoContainer>
                    <S.Title>Reader Info</S.Title>
                    <S.Count>{values.counts?.returned}</S.Count>
                    <S.CountLabel>Books Read</S.CountLabel>
                    <S.Count>{values.counts?.pending}</S.Count>
                    <S.CountLabel>Books Borrowed</S.CountLabel>
                </S.ReaderInfoContainer>
            </S.Root>
        </Layout>
    )
}