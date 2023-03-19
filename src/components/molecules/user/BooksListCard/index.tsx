import * as S from "./styles";
import Img from "@atoms/Img";

interface Props {
    title: string;
    author: string;
    image: string;
}

export function BookListCard(props: Props) {
    return (
        <S.Root>
            <S.ImageWrapper>
                <Img src={props.image} alt={props.title}/>
            </S.ImageWrapper>
            <S.Title>{props.title}</S.Title>
            <S.Author>{props.author}</S.Author>
        </S.Root>
    )
}