import * as S from "./styles";
import {Img, StatusLabel} from "@atoms/index";
import useUserRouter from "@app/lib/route-manager/user-routes";

interface Props {
    id: string;
    title: string;
    author: string;
    image: string;
    status: string;
}

export const WishCard = (props: Props) => {
    const router = useUserRouter();

    return (
        <S.Root onClick={() => router.book.details(props.id).navigate()}>
            <S.BookThumbnail>
                <Img src={props.image}/>
            </S.BookThumbnail>
            <S.BookInfo>
                <StatusLabel title={props.status}/>
                <S.Title>{props.title}</S.Title>
                <S.Author>{props.author}</S.Author>
            </S.BookInfo>
        </S.Root>
    )
}