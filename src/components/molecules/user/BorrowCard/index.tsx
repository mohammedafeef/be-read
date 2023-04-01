import * as S from "./styles";
import {Img, StatusLabel} from "@atoms/index";

interface Props {
    title: string;
    author: string;
    image: string;
    status: string;
    issuedDate: Date;
    returnDate: Date;
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
    return (
        <S.Root>
            <S.BookThumbnail>
                <Img src={props.title}/>
            </S.BookThumbnail>
            <S.BookInfo>
                <StatusLabel title={getStatus(props.returnDate)}/>
                <S.Title>{props.title}</S.Title>
                <S.Author>{props.author}</S.Author>
                <S.DateWrapper>
                    <S.DateConatiners>
                        Issued on {getFormattedDate(props.issuedDate)}
                    </S.DateConatiners>
                    <S.DateConatiners>
                        Due on {getFormattedDate(props.issuedDate)}
                    </S.DateConatiners>
                </S.DateWrapper>
            </S.BookInfo>
        </S.Root>
    )
}