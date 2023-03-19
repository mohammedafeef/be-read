import * as S from "./styles";
import {Img, StatusLabel} from "@atoms/index";

interface Props {
    title: string;
    author: string;
    image: string;
    status: string;
}

export const BorrowCard = (props: Props) => {
    return (
        <S.Root>
            <S.BookThumbnail>
                <Img src={props.title}/>
            </S.BookThumbnail>
            <S.BookInfo>
                <StatusLabel title={props.status}/>
                <S.Title>{props.title}</S.Title>
                <S.Author>{props.author}</S.Author>
            </S.BookInfo>
        </S.Root>
    )
}