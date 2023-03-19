import * as S from "./styles";
import Img from "@atoms/Img";
import {StatusLabel} from "@atoms/index";

interface Props {
    title: string;
    author: string;
    image: string;
    status: string;
}

export function BookListCard(props: Props) {
    return (
        <S.Root>
            <S.ImageWrapper>
                <Img src={props.image} alt={props.title}/>
            </S.ImageWrapper>
            <StatusLabel title={props.status}/>
            <S.Title>{props.title}</S.Title>
            <S.Author>{props.author}</S.Author>
        </S.Root>
    )
}