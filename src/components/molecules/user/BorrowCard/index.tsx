import * as S from "./styles";
import {Img, StatusLabel} from "@atoms/index";

interface Props {
    title: string;
    author: string;
    image: string;
    issuedDate: Date;
    returnDate: Date;
    isReturned: boolean;
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
        return today.getTime() > Number(returnDate) ? "Overdue" : "Due soon";
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
                {!props.isReturned && getFine(props.returnDate) &&
                    <S.FineText>You have to pay {getFine(props.returnDate)}₹ fine for overdue</S.FineText>}
                <S.DateWrapper>
                    <S.DateConatiners>
                        Issued on {getFormattedDate(props.issuedDate)}
                    </S.DateConatiners>
                    <S.DateConatiners>
                        Due on {getFormattedDate(props.returnDate)}
                    </S.DateConatiners>
                </S.DateWrapper>
            </S.BookInfo>
        </S.Root>
    )
}