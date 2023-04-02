import * as S from "./styles";
import {Img, StatusLabel} from "@atoms/index";
import {useMutation} from "react-query";
import toast from "react-hot-toast";
import {returnBook} from "@app/services/bookIssueService";
import {markBookAsAvailable} from "@app/services/bookService";

interface Props {
    id: string;
    bookId: string;
    title: string;
    author: string;
    studentName: string;
    image: string;
    issuedDate: Date;
    returnDate: Date;
    isReturned: boolean;
    refetch: () => void;
}

export const BorrowCard = (props: Props) => {
    const getFormattedDate = (date: Date) => {
        const dateObj = new Date(date);
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
    }
    const getStatus = (returnDate: Date) => {
        const today = new Date();
        return today > returnDate ? "Overdue" : "Due soon";
    }
    const returnBookMutation = useMutation(
        async (id: string) => {
            await returnBook(id);
            await markBookAsAvailable(props.bookId);
            await props.refetch();
        },
        {
            onSuccess: async () => {
                toast.success('Book marked as returned');
            },
            onError: () => {
                toast.error("Something went wrong, please try again");
            }
        },
    );

    const handleReturn = () => {
        returnBookMutation.mutate(props.id);
    }
    return (
        <S.Root>
            <S.BookThumbnail>
                <Img src={props.title}/>
            </S.BookThumbnail>
            <S.BookInfo>
                <StatusLabel title={props.isReturned ? "Returned" : getStatus(props.returnDate)}/>
                <S.Title>{props.title}</S.Title>
                <S.Author>{props.author}</S.Author>
                <S.StudentName>Book issued for {props.studentName}</S.StudentName>
                <S.DateWrapper>
                    <S.DateConatiners>
                        Issued on {getFormattedDate(props.issuedDate)}
                    </S.DateConatiners>
                    <S.DateConatiners>
                        Due on {getFormattedDate(props.issuedDate)}
                    </S.DateConatiners>
                </S.DateWrapper>
                {!props.isReturned && <S.ButtonWrapper>
                    <S.ReturnButton onClick={handleReturn}>Mark as Returned</S.ReturnButton>
                </S.ButtonWrapper>}
            </S.BookInfo>
        </S.Root>
    )
}