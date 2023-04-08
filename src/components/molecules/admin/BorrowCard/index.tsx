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
        const today = new Date().getTime();
        return today > Number(returnDate) ? "Overdue" : "Due soon";
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
    const getFine = (returnDate: Date) => {
        const today = new Date();
        if (today < returnDate) return 0;
        const diff = Math.abs(today.getTime() - Number(returnDate));
        return Math.ceil(diff / (1000 * 3600 * 24));
    }
    return (
        <S.Root>
            <S.BookThumbnail>
                <Img src={props.image}/>
            </S.BookThumbnail>
            <S.BookInfo>
                <StatusLabel title={props.isReturned ? "Returned" : getStatus(props.returnDate)}/>
                <S.Title>{props.title}</S.Title>
                <S.Author>{props.author}</S.Author>
                <S.StudentName>Book issued for {props.studentName}</S.StudentName>
                {!props.isReturned && getFine(props.returnDate) &&
                    <S.FineText>Student have to pay {getFine(props.returnDate)}₹ fine for overdue</S.FineText>}
                <S.DateWrapper>
                    <S.DateConatiners>
                        Issued on {getFormattedDate(props.issuedDate)}
                    </S.DateConatiners>
                    <S.DateConatiners>
                        Due on {getFormattedDate(props.returnDate)}
                    </S.DateConatiners>
                </S.DateWrapper>
                {!props.isReturned && <S.ButtonWrapper>
                    <S.ReturnButton onClick={handleReturn}>Mark as Returned</S.ReturnButton>
                </S.ButtonWrapper>}
            </S.BookInfo>
        </S.Root>
    )
}