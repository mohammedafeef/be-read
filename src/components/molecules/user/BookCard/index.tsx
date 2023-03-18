import * as S from "./styles";
import Img from "@atoms/Img";

interface Props {
    title: string;
    author: string;
    image: string;
}

export function BookCard(props: Props) {
    return (
        <S.Root>
            <S.ImageWrapper>
                <Img src={props.image}/>
            </S.ImageWrapper>
            <S.Title>{props.title}</S.Title>
            <S.Author>{props.author}</S.Author>
        </S.Root>
    )
}